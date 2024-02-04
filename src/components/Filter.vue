<script setup>
import container from './Container.vue';
import SearchInput from './SearchInput.vue'
</script>

<template>
  <container>
    <div class="flex flex-row items-center justify-between mb-5 px-2">
      <h2 class="text-xl">All products</h2>
      <div class="flex flex-row items-center justify-between gap-x-4">
        <select class="py-4 rounded-xl">
          <option>Name</option>
          <option>Price high to low</option>
          <option>Price low to hight</option>
        </select>
        <SearchInput />
      </div>
    </div>
  </container>
</template>
