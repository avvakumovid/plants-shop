<script setup>
defineProps({
  title: String,
  description: String,
  iconUrl: String
})
</script>

<template>
  <li>
    <a class="flex flex-col items-center w-[400px]">
      <div class="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6">
        <img :src="iconUrl" alt="plant" />
      </div>
      <h3 class="mb-3 font-bold">{{ title }}</h3>
      <p class="text-custom-black-200">
        {{ description }}
      </p>
    </a>
  </li>
</template>
