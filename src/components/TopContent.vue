<script setup>
import container from './Container.vue'
</script>

<template>
  <container>
    <div class="h-[512px] w-full rounded-3xl flex flex-row bg-accent text-custom-black mb-24">
      <div class="w-1/2 p-12 max-w-[600px]">
        <h1 class="text-6.5xl leading-[64px] font-extrabold text-black mb-6">
          Buy your dream plants
        </h1>
        <div class="flex flex-row gap-x-12 mb-12">
          <div class="flex flex-col pr-12 border-r border-custom-black">
            <span class="text-3.5xl">50+</span>
            <span class="text-lg">Plant Species</span>
          </div>
          <div class="flex flex-col">
            <span class="text-3.5xl">100+</span>
            <span class="text-lg">Customers</span>
          </div>
        </div>
        <div class="relative">
          <div
            class="flex cursor-pointer rounded-xl items-center justify-center absolute m-auto mr-2 right-0 top-0 bottom-0 h-12 w-12 ease-in  duration-300 bg-accent hover:bg-accent-100 "
          >
            <img src="/icons/search.svg" alt="search" />
          </div>
          <input
            class="w-full h-16 ps-[18px] pe-[74px] rounded-xl input"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
      <div class="relative w-1/2 flex items-end justify-end pr-[72px] ml-auto">
        <div
          class="absolute w-[450px] h-[400px] rounded-full rounded-br-none bg-custom-black"
        ></div>
        <img class="absolute" src="/top-img.png" alt="" />
      </div></div
  ></container>
</template>

<style scoped></style>
