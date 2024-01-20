<script setup>
defineProps({
  text: String,
  isAccentBg: Boolean
})
</script>

<template>
  <button
    class="flex text-lg bg-accent items-center gap-[10px] py-3 px-5 rounded-lg hover:translate-x-3 ease-in duration-300"
    :class="isAccentBg ? 'bg-accent hover:bg-accent-100' : 'bg-white'"
  >
    {{ text }}<img src="/icons/arrow.svg" />
  </button>
</template>
