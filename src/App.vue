<script setup lang="ts">
import Header from './components/Header.vue'
import Description from './components/Description.vue'
import GameSection from './components/GameSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <Header />
    <Description />
    <GameSection />
    <Footer />
  </div>
</template>

<style scoped></style>
