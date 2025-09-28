import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useGameStore = defineStore('game', () => {
  // State
  const contractAddress = ref('0x742d35Cc6634C0532925a3b8D51d13f8C8E0a982')
  const gameStarted = ref(false)
  const gameLoading = ref(false)
  const isFullscreen = ref(false)
  const loadingProgress = ref(0)

  // Getters
  const truncatedAddress = computed(() => {
    const addr = contractAddress.value
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  })

  const gameStatus = computed(() => {
    if (gameLoading.value) return 'loading'
    if (gameStarted.value) return 'playing'
    return 'idle'
  })

  // Actions
  const setContractAddress = (address: string) => {
    contractAddress.value = address
  }

  const startGame = () => {
    gameLoading.value = true
    loadingProgress.value = 0

    // Simulate loading progress
    const interval = setInterval(() => {
      loadingProgress.value += Math.random() * 15
      if (loadingProgress.value >= 100) {
        loadingProgress.value = 100
        clearInterval(interval)

        setTimeout(() => {
          gameLoading.value = false
          gameStarted.value = true
        }, 500)
      }
    }, 200)
  }

  const stopGame = () => {
    gameStarted.value = false
    gameLoading.value = false
    loadingProgress.value = 0
  }

  const toggleFullscreen = () => {
    isFullscreen.value = !isFullscreen.value

    if (isFullscreen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress.value)
      return true
    } catch (err) {
      console.error('Failed to copy address:', err)
      return false
    }
  }

  return {
    // State
    contractAddress,
    gameStarted,
    gameLoading,
    isFullscreen,
    loadingProgress,

    // Getters
    truncatedAddress,
    gameStatus,

    // Actions
    setContractAddress,
    startGame,
    stopGame,
    toggleFullscreen,
    copyAddress,
  }
})
