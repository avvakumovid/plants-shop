<script setup>
import AboutUs from './components/AboutUs.vue'
import BestSelling from './components/BestSelling.vue'
import Categories from './components/Categories.vue'
import TopContent from './components/TopContent.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Feedback from './components/Feedback.vue'
import Drawer from './components/Drawer.vue'
import Filter from './components/Filter.vue'
import AllProducts from './components/AllProducts.vue'
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png',
    isAddToCart: false
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png',
    isAddToCart: true
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png',
    isAddToCart: false
  },
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png',
    isAddToCart: false
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png',
    isAddToCart: true
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png',
    isAddToCart: false
  },
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png',
    isAddToCart: false
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png',
    isAddToCart: true
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png',
    isAddToCart: false
  },
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png',
    isAddToCart: false
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png',
    isAddToCart: true
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png',
    isAddToCart: false
  },
  {
    id: 1,
    title: 'Natural Plants',
    price: 1400,
    imageUrl: '/plants-1.png',
    isAddToCart: false
  },
  {
    id: 2,
    title: 'Plant Accessories',
    price: 900,
    imageUrl: '/plants-2.png',
    isAddToCart: true
  },
  {
    id: 3,
    title: 'Artificial Plants',
    price: 3500,
    imageUrl: '/plants-3.png',
    isAddToCart: false
  },
])
</script>

<template>
  <div class="container-snap w-screen h-screen overflow-x-hidden text-lg text-custom-black">
    <Header />
    <Filter />
    <AllProducts :products="products" />
    <!-- <TopContent /> -->
    <!-- <BestSelling /> -->
    <!-- <AboutUs /> -->
    <!-- <Categories /> -->
    <!-- <Feedback /> -->
    <!-- <Footer /> -->
    <!-- <Drawer /> -->
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.visible-scroll {
  scrollbar-width: thin;
  scrollbar-color: #C1DCDC #dfe9eb;
}

/* Chrome, Edge and Safari */
.visible-scroll::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
.visible-scroll::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #dfe9eb;
}

.visible-scroll::-webkit-scrollbar-track:hover {
  background-color: #b8c0c2;
}

.visible-scroll::-webkit-scrollbar-track:active {
  background-color: #b8c0c2;
}

.visible-scroll::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #C1DCDC;
}

.visible-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #91b9b9;
}

.visible-scroll::-webkit-scrollbar-thumb:active {
  background-color: #91b9b9;
}
</style>
