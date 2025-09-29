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
        <h2 class="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Play
          <span class="bg-gradient-to-r from-[#00ffcc] via-[#7acfb5] to-[#00d4aa] bg-clip-text text-transparent">
            $ANGRY
          </span>
          Bots and earn coins
        </h2>
      </div>

      <div class="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        <p class="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 font-medium">
          Enter the ultimate battle arena where metal warriors clash in explosive combat. AngryBots combines intense
          gameplay with blockchain technology, creating an immersive gaming experience where every victory counts.
        </p>
        <p class="text-sm sm:text-base md:text-base lg:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
          Fight, earn, and dominate in this revolutionary Web3 gaming ecosystem powered by cutting-edge Unity
          technology.
        </p>
      </div>

      <div class="rounded-2xl">
        <h4
          class="text-xl sm:text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#00ffcc] via-[#7acfb5] to-[#00d4aa] bg-clip-text text-transparent">
          Contract Address
        </h4>

        <div class="flex gap-2 items-center justify-center">
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              :value="truncatedAddress"
              readonly
              class="w-full px-4 py-3 bg-gray-900/80 border border-gray-600 rounded-lg text-gray-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#7acfb5]/50" />
            <div class="absolute inset-y-0 right-3 flex items-center">
              <span class="text-gray-500 text-xs">CA</span>
            </div>
          </div>

          <button
            @click="copyAddress"
            class="p-3 bg-[#7acfb5] hover:bg-[#6bb8a5] text-slate-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7acfb5]/50 shadow-lg hover:shadow-[0_0_20px_#7acfb5]">
            <!-- Copy Icon -->
            <svg
              v-if="!copied"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <!-- Check Icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
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
