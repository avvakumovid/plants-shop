<script setup>
import container from './Container.vue'
import Button from './Button.vue'
</script>

<template>
  <section class="text-center w-full mb-24">
    <h2 class="text-3.5xl mb-3">Categories</h2>
    <p class="text-lg text-custom-black-200 mb-24">Find what you are looking for</p>
    <div class="w-full bg-accent pb-24 ">
      <container >
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-row gap-x-24">
            <div class="-mt-12 w-[352px] cursor-pointer hover:translate-y-24 ease-in duration-500">
              <img src="/category-1.png" class="mb-3" />
              <h3 class="font-bold">Natural Plants</h3>
            </div>
            <div
              class="mt-12 w-[352px] text-center flex flex-col items-center cursor-pointer hover:-translate-y-24 ease-in duration-500"
            >
              <img src="/category-2.png" class="mb-3" />
              <h3 class="font-bold">Plant Accessories</h3>
              <p class="mb-9">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="-mt-12 w-[352px] cursor-pointer hover:translate-y-24 ease-in duration-500">
              <img src="/category-3.png" class="mb-3" />
              <h3 class="font-bold">Artificial Plants</h3>
            </div>
          </div>
          <Button text="Explore" />
        </div>
      </container>
    </div>
  </section>
</template>
