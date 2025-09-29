<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { CONTRACT_ADDRESS, truncateAddress, copyToClipboard } from '../utils/contract'

  const copied = ref(false)

  const truncatedAddress = computed(() => truncateAddress(CONTRACT_ADDRESS))

  const copyAddress = async () => {
    const success = await copyToClipboard(CONTRACT_ADDRESS)
    if (success) {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    }
  }
</script>

<template>
  <section class="py-10 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-6 sm:mb-8">
        <h2 class="text-4xl sm:text-5xl font-bold mb-6 text-white">
          Play
          <span class="text-[#7acfb5]">$ANGRY</span>
          Bots and earn coins
        </h2>
      </div>

      <div class="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
          Enter the ultimate battle arena where metal warriors clash in explosive combat. AngryBots combines intense
          gameplay with blockchain technology, creating an immersive gaming experience where every victory counts.
        </p>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
          Fight, earn, and dominate in this revolutionary Web3 gaming ecosystem powered by cutting-edge Unity
          technology.
        </p>
      </div>

      <div class="rounded-2xl">
        <h3 class="text-2xl font-bold text-center mb-6 text-[#7acfb5]">Contract Address</h3>

        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              :value="truncatedAddress"
              readonly
              class="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
            <div class="absolute inset-y-0 right-3 flex items-center">
              <span class="text-gray-500 text-xs">CA</span>
            </div>
          </div>

          <button
            @click="copyAddress"
            class="px-6 py-3 bg-[#7acfb5] hover:bg-[#6bb8a5] text-slate-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7acfb5]/50 shadow-lg hover:shadow-[0_0_20px_#7acfb5]">
            {{ copied ? 'Copied!' : 'Copy' }}
          </button>
        </div>

        <!-- Full Address Display (Mobile) -->
        <!-- <div class="mt-4 sm:hidden">
          <p class="text-xs text-gray-500 text-center font-mono break-all">
            {{ contractStore.contractAddress }}
          </p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped></style>
