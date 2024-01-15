<script setup>
import AboutUs from './components/AboutUs.vue'
import BestSelling from './components/BestSelling.vue'
import Categories from './components/Categories.vue'
import TopContent from './components/TopContent.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="container-snap w-screen h-screen overflow-x-hidden text-lg text-custom-black">
    <Header />
    <TopContent />
    <BestSelling />
    <AboutUs />
    <Categories />
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
