<script setup>
import container from './Container.vue';
import BestSellingCard from './BestSellingCard.vue'

defineProps({
  products: []
})
</script>

<template>
  <container>
    <div class="flex flex-row flex-wrap gap-5 items-center justify-around">
      <BestSellingCard
        v-for="product in products"
        :key="product.id"
        :image-url="product.imageUrl"
        :title="product.title"
        :price="product.price"
        :is-add-to-cart="product.isAddToCart"
      />
    </div>
  </container>
</template>
