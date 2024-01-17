<script setup>
import container from './Container.vue'
</script>

<template>
  <footer class="w-full bg-accent">
    <container>
      <div class="py-12">
        <div class="w-full flex flex-row justify-between mb-24">
          <div class="w-48">
            <h2 class="mb-6">GREENMIND</h2>
            <span class="mb-6 text-custom-black-200 inline-block"
              >We help you find your dream plant</span
            >
            <div class="w-full justify-between items-center flex flex-row gap-x-6">
              <a
                class="cursor-pointer w-12 h-12 rounded-full border border-custom-black-200 flex justify-center items-center"
              >
                <img src="/icons/facebook.svg" alt="facebook" />
              </a>
              <a
                class="cursor-pointer w-12 h-12 rounded-full border border-custom-black-200 flex justify-center items-center"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
              <a
                class="cursor-pointer w-12 h-12 rounded-full border border-custom-black-200 flex justify-center items-center"
              >
                <img src="/icons/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div class="flex flex-row gap-x-12 mb">
            <div class="flex flex-col gap-y-6">
              <span class="font-bold">Information</span>
              <span>About</span>
              <span>Product</span>
              <span>Blog</span>
            </div>
            <div class="flex flex-col gap-y-6">
              <span class="font-bold">Company</span>
              <span>Community</span>
              <span>Career</span>
              <span>Our story</span>
            </div>
            <div class="flex flex-col gap-y-6">
              <span class="font-bold">Contact</span>
              <span>Getting Started</span>
              <span>Pricing</span>
              <span>Resources</span>
            </div>
          </div>
        </div>
        <span class="text-custom-black-200">2023 all Right Reserved Term of use GREENMIND</span>
      </div>
    </container>
  </footer>
</template>
