<script setup>
defineProps({
  title: String,
  price: Number,
  imageUrl: String
})
</script>

<template>
  <div class="text-lg">
    <a href="#">
      <img :src="imageUrl" alt="title" class="mb-3" />
      <h3 class="mb-2 text-custom-black">{{ title }}</h3>
      <span class="text-custom-black-200">{{ price }} ₱</span>
    </a>
  </div>
</template>
