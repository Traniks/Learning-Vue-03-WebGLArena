<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isFullscreen = ref(false)
const gameStarted = ref(false)
const gameLoading = ref(false)
const loadingProgress = ref(0)

// Toggle fullscreen
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  
  if (isFullscreen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Start game simulation
const startGame = async () => {
  gameLoading.value = true
  loadingProgress.value = 0
  
  // Simulate loading progress
  const loadingInterval = setInterval(() => {
    loadingProgress.value += Math.random() * 15
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100
      clearInterval(loadingInterval)
      
      setTimeout(() => {
        gameLoading.value = false
        gameStarted.value = true
        initializeUnityGame()
      }, 500)
    }
  }, 200)
}

// Initialize Unity game (placeholder)
const initializeUnityGame = () => {
  // Here you would initialize the actual Unity WebGL build
  console.log('Unity game initialized')
  
  // Remove Unity branding and links
  setTimeout(() => {
    // Hide Unity logo and "Made with Unity" link
    const unityElements = document.querySelectorAll('.unity-logo, .unity-footer, [href*="unity3d.com"]')
    unityElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.display = 'none'
      }
    })
  }, 1000)
}

// Handle escape key for fullscreen exit
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Game Container -->
      <div class="relative">
        <!-- Game Frame -->
        <div 
          class="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
          :class="{ 'fixed inset-0 z-50': isFullscreen }"
        >
          <!-- Fullscreen Button -->
          <button
            @click="toggleFullscreen"
            class="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg transition-all duration-200 backdrop-blur-sm"
            :class="{ 'top-8 right-8': isFullscreen }"
          >
            <svg 
              v-if="!isFullscreen" 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5"/>
            </svg>
            <svg 
              v-else 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Game Content -->
          <div 
            class="game-container"
            :class="{ 'fullscreen-game': isFullscreen }"
          >
            <!-- Unity WebGL Game Placeholder -->
            <div class="game-placeholder aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <div class="text-center">
                <!-- Play Button -->
                <button
                  @click="startGame"
                  class="group relative px-12 py-6 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  :disabled="gameLoading"
                >
                  <div v-if="gameLoading" class="flex items-center gap-3">
                    <div class="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                  </div>
                  <div v-else class="flex items-center gap-3">
                    <svg class="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    PLAY
                  </div>
                </button>
                
                <!-- Game Instructions -->
                <p class="mt-6 text-gray-400 text-lg">
                  Click to start your battle in the arena
                </p>
              </div>
            </div>

            <!-- Unity Game Element (Hidden initially) -->
            <div 
              v-show="gameStarted" 
              id="unity-container" 
              class="w-full h-full"
            >
              <canvas 
                id="unity-canvas" 
                class="w-full h-full"
                :class="{ 'cursor-none': isFullscreen }"
              ></canvas>
            </div>
          </div>

          <!-- Game Loading Overlay -->
          <div 
            v-if="gameLoading" 
            class="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm"
          >
            <div class="text-center">
              <div class="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
              <p class="text-white text-xl font-semibold">Loading AngryBots...</p>
              <div class="mt-4 w-64 bg-gray-700 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: loadingProgress + '%' }"
                ></div>
              </div>
              <p class="text-gray-300 mt-2">{{ loadingProgress }}%</p>
            </div>
          </div>
        </div>

        <!-- Game Info -->
        <div class="mt-8 text-center">
          <p class="text-gray-400">
            Experience intense robot combat in stunning WebGL graphics
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.game-container {
  aspect-ratio: 16/9;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.fullscreen-game {
  width: 100vw;
  height: 100vh;
  aspect-ratio: unset;
  max-width: unset;
}

.game-placeholder {
  background: 
    radial-gradient(ellipse at center, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
    linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
}

/* Hide Unity WebGL footer and branding */
:deep(.unity-footer),
:deep(.unity-logo),
:deep([href*="unity3d.com"]) {
  display: none !important;
}
</style>