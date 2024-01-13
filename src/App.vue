<script setup>
import AboutUs from './components/AboutUs.vue'
import BestSelling from './components/BestSelling.vue'
import Header from './components/Header.vue'
import TopContent from './components/TopContent.vue'
</script>

<template>
  <div class="w-screen h-screen px-24 overflow-x-hidden">
    <div class="h-full w-[1248px] my-0 mx-auto">
      <Header />
      <TopContent />
      <BestSelling />
      <AboutUs />
    </div>
  </div>
</template>

<style scoped></style>
