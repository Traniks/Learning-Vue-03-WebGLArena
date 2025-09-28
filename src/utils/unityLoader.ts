// Unity WebGL интеграция для AngryBots
export interface UnityInstance {
  SendMessage: (gameObject: string, methodName: string, parameter?: any) => void
  Quit: () => Promise<void>
  SetFullscreen: (fullscreen: boolean) => void
}

export interface UnityConfig {
  dataUrl: string
  frameworkUrl: string
  codeUrl: string
  streamingAssetsUrl: string
  companyName: string
  productName: string
  productVersion: string
  showBanner?: boolean
  matchWebGLToCanvasSize?: boolean
  devicePixelRatio?: number
}

// Конфигурация для AngryBots
export const unityConfig: UnityConfig = {
  dataUrl: '/unity/AngryBots-Unity6-WebBuild.data.unityweb',
  frameworkUrl: '/unity/AngryBots-Unity6-WebBuild.framework.js.unityweb',
  codeUrl: '/unity/AngryBots-Unity6-WebBuild.wasm.unityweb',
  streamingAssetsUrl: '/unity/StreamingAssets',
  companyName: 'AngryBots Team',
  productName: 'AngryBots',
  productVersion: '1.0.0',
  showBanner: false, // Отключаем Unity баннер
  matchWebGLToCanvasSize: true,
  devicePixelRatio: 1,
}

// Прогресс загрузки
export type UnityProgressCallback = (progress: number) => void

// Загрузка Unity
export const loadUnity = async (
  canvas: HTMLCanvasElement,
  config: UnityConfig,
  onProgress?: UnityProgressCallback
): Promise<UnityInstance> => {
  return new Promise((resolve, reject) => {
    // Загружаем Unity loader
    const script = document.createElement('script')
    script.src = '/unity/AngryBots-Unity6-WebBuild.loader.js'

    script.onload = () => {
      // Проверяем что Unity loader загружен
      if (typeof window.createUnityInstance === 'function') {
        // Создаем экземпляр Unity
        window
          .createUnityInstance(canvas, config, (progress: number) => {
            if (onProgress) onProgress(progress * 100)
          })
          .then((unityInstance: UnityInstance) => {
            // Скрываем Unity брендинг после загрузки
            setTimeout(() => {
              hideUnityBranding()
            }, 1000)
            resolve(unityInstance)
          })
          .catch((error: any) => {
            reject(new Error(`Unity загрузка не удалась: ${error.message}`))
          })
      } else {
        reject(new Error('Unity loader не найден'))
      }
    }
    script.onerror = () => {
      reject(new Error('Не удалось загрузить Unity loader'))
    }
    document.head.appendChild(script)
  })
}

// Удаление Unity брендинга
export const hideUnityBranding = (): void => {
  const selectors = [
    '.unity-logo',
    '.unity-footer',
    '[href*="unity3d.com"]',
    '[href*="unity.com"]',
    '.webgl-logo',
    '#unity-logo',
    '.unity-progress-bar-empty',
    '.unity-progress-bar-full',
  ]

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.display = 'none'
      }
    })
  })

  // Удаляем Unity watermark из DOM
  const watermarks = document.querySelectorAll('div[style*="unity"], div[style*="Unity"]')
  watermarks.forEach(element => element.remove())
}

// Глобальный тип для Unity loader
declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>
  }
}
