<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  price: Number,
  imageUrl: String,
  isAddToCart: Boolean
})

const isAddToCartf = ref(props.isAddToCart)

const handleAddToCart = (e) => {
  isAddToCartf.value = !isAddToCartf.value
}
</script>

<template>
  <div
    class="text-lg rounded-xl cursor-pointer ease-in duration-150 p-4 hover:bg-accent hover:bg-opacity-30"
  >
    <a href="/melharucos" class="cursor-default">
      <img :src="imageUrl" alt="title" class="mb-3" />
      <h3 class="mb-2 text-custom-black">{{ title }}</h3>
      <div class="flex flex-row justify-between items-center">
        <span class="text-custom-black-200">{{ price }} ₱</span
        ><button @click.prevent="handleAddToCart" class=" p-3">
          <img :src="isAddToCartf ? '/icons/cart-check.svg' : '/icons/cart-plus.svg'" width="25px" />
        </button>
      </div>
    </a>
  </div>
</template>
