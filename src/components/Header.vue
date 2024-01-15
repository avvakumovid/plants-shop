<script setup>
import container from './Container.vue'
</script>

<template>
  <container>
    <header class="w-full flex flex-row py-12 gap-24 items-center text-custom-black">
      <a class="text-2xl cursor-pointer">GREENMIND</a>
      <nav class="flex-1">
        <ul class="flex flex-row gap-12 items-center text-custom-black-200">
          <li>
            <a class="text-custom-black cursor-pointer transition delay-100 hover:text-green-400"
              >Home</a
            >
          </li>
          <li><a class="cursor-pointer">Products</a></li>
          <li><a class="cursor-pointer">Contacts</a></li>
        </ul>
      </nav>
      <ul class="flex flex-row gap-12 items-center">
        <li>
          <a href=""><img src="/icons/cart.svg" alt="cart" /></a>
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
