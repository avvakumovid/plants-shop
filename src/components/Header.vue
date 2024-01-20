<script setup>
import container from './Container.vue'
</script>

<template>
  <container>
    <header class="w-full flex flex-row py-12 gap-24 items-center text-custom-black">
      <a class="text-2xl cursor-pointer hover:-translate-y-1">GREENMIND</a>
      <nav class="flex-1">
        <ul class="flex flex-row gap-12 items-center text-custom-black-200">
          <li><a class="link active">Home</a></li>
          <li><a class="link">Products</a></li>
          <li><a class="link">Contacts</a></li>
        </ul>
      </nav>
      <ul class="flex flex-row gap-12 items-center">
        <li>
          <a><img src="/icons/cart.svg" alt="cart" /></a>
        </li>
        <li>
          <a href=""><img src="/icons/profile.svg" alt="profile" /></a>
        </li>
        <li>
          <a href=""><img src="/icons/menu.svg" alt="menu" /></a>
        </li>
      </ul>
    </header>
  </container>
</template>

<style scoped>
.link {
  @apply cursor-pointer inline-block ease-in duration-150 hover:text-accent-100  hover:-translate-y-1 ;
}
.active {
  @apply text-custom-black;
}
</style>
