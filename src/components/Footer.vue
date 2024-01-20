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
                class="link-icon"
              >
                <img src="/icons/facebook.svg" alt="facebook" />
              </a>
              <a
                class="link-icon"
              >
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
              <a
                class="link-icon"
              >
                <img src="/icons/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div class="flex flex-row gap-x-12 mb">
            <div class="flex flex-col gap-y-6">
              <a  href="" class="font-bold link">Information</a>
              <a class="link" href="">About</a>
              <a class="link" href="">Product</a>
              <a class="link" href="">Blog</a>
            </div>
            <div class="flex flex-col gap-y-6">
              <a href="" class="font-bold link">Company</a>
              <a class="link" href="">Community</a>
              <a class="link" href="">Career</a>
              <a class="link" href="">Our story</a>
            </div>
            <div class="flex flex-col gap-y-6">
              <a href="" class="font-bold link">Contact</a>
              <a class="link" href="">Getting Started</a>
              <a class="link" href="">Pricing</a>
              <a class="link" href="">Resources</a>
            </div>
          </div>
        </div>
        <span class="text-custom-black-200">2023 all Right Reserved Term of use GREENMIND</span>
      </div>
    </container>
  </footer>
</template>

<style scoped>
.link-icon {
  @apply cursor-pointer w-12 h-12 rounded-full border border-custom-black-200 flex justify-center items-center hover:bg-accent-100 
}

.link {
  @apply hover:text-accent-100
}

</style>