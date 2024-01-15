<script setup>
import { ref } from 'vue'
import AboutUsItem from './AboutUsItem.vue'
import container from './Container.vue'

const items = ref([
  {
    id: 1,
    title: 'Large Assortment',
    description:
      'we offer many different types of products with fewer variations in each category.',
    iconUrl: '/icons/plant.svg'
  },
  {
    id: 2,
    title: 'Fast & Free Shipping',
    description: '4-day or less delivery time, free shipping and an expedited delivery option.',
    iconUrl: '/icons/box.svg'
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'answers to any business related inquiry 24/7 and in real-time.',
    iconUrl: '/icons/call.svg'
  }
])
</script>

<template>
  <container>
    <section class="text-center text-custom-black text-lg mb-[165px]">
      <h2 class="text-3.5xl mb-3 font-bold">About Us</h2>
      <p class="text-custom-black-200 mb-12">Order now and appreciate the beauty of nature</p>
      <ul class="flex flex-row gap-6">
        <AboutUsItem
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :icon-url="item.iconUrl"
        />
      </ul>
    </section>
  </container>
</template>
