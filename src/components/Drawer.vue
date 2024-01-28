<script setup>
import Button from './Button.vue';
import CardCart from './CartCard.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="fixed top-0 right-0 bg-white h-full w-96 ml-auto mr-0 z-20 py-8 px-6 flex flex-col">
    <h2 class="text-2xl flex items-center mb-8 font-bold">
      <button><img class="-scale-x-100 mr-3" src="/icons/arrow.svg" width="30px" /></button>Cart
    </h2>
    <div>
      <CardCart />
    </div>
    <div class="w-full mt-auto mb-0  flex flex-col gap-y-6">
      <div class="flex items-end gap-x-2">
        <span class="font-semibold">Total</span>
        <div class="flex-1 border-b border-custom-black-200 border-dotted"></div>
        <span>50 r</span>
      </div>
      <div class="flex items-end gap-x-2">
        <span class="font-semibold">VAT</span>
        <div class="flex-1 border-b border-custom-black-200 border-dotted"></div>
        <span>50 r</span>
      </div>
      <Button :is-icon="false" is-accent-bg text="BUY!" />
    </div>
  </div>
</template>
