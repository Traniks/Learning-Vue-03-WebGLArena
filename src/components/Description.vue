<script setup lang="ts">
import { ref, computed } from 'vue'

// Contract address (placeholder - replace with real address)
const contractAddress = ref('0xAbC8053076fb10598E11e2F71C2f250162E49d73')
const copied = ref(false)

// Truncate address for display
const truncatedAddress = computed(() => {
  const addr = contractAddress.value
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
})

// Copy to clipboard function
const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(contractAddress.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy address:', err)
  }
}
</script>

<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Description Text -->
      <div class="text-center mb-12">
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Enter the ultimate battle arena where metal warriors clash in explosive combat. 
          AngryBots combines intense gameplay with blockchain technology, creating an 
          immersive gaming experience where every victory counts.
        </p>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          Fight, earn, and dominate in this revolutionary Web3 gaming ecosystem 
          powered by cutting-edge Unity technology and smart contract integration.
        </p>
      </div>
      
      <!-- Contract Address Section -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
        <h3 class="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Contract Address
        </h3>
        
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <!-- Contract Address Input -->
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              :value="truncatedAddress"
              readonly
              class="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            >
            <div class="absolute inset-y-0 right-3 flex items-center">
              <span class="text-gray-500 text-xs">CA</span>
            </div>
          </div>
          
          <!-- Copy Button -->
          <button
            @click="copyAddress"
            class="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 shadow-lg"
          >
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        
        <!-- Full Address Display (Mobile) -->
        <div class="mt-4 sm:hidden">
          <p class="text-xs text-gray-500 text-center font-mono break-all">
            {{ contractAddress }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>