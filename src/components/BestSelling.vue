<script setup>
import { ref } from 'vue'
import BestSellingCard from './BestSellingCard.vue'
const plants = ref([
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png'
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png'
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png'
  }
])
</script>

<template>
  <main class="flex flex-row mb-28">
    <div class="w-96">
      <h2 class="text-3.5xl text-custom-black font-bold mb-3">Best Selling Plants</h2>
      <p class="max-w-52 text-lg text-custom-black-200 mb-6">
        Easiest way to healthy life by buying your favorite plants
      </p>
      <button class="flex text-lg bg-accent items-center gap-[10px] py-3 px-5 rounded-lg">
        See more<img src="/icons/arrow.svg" />
      </button>
    </div>
    <div class="w-full flex flex-row gap-12">
      <BestSellingCard
        v-for="plant in plants"
        :key="plant.id"
        :image-url="plant.imageUrl"
        :title="plant.title"
        :price="plant.price"
      />
    </div>
  </main>
</template>
