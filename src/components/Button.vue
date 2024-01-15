<script setup>
defineProps({
  text: String,
  isAccentBg: Boolean
})
</script>

<template>
  <button
    class="flex text-lg bg-accent items-center gap-[10px] py-3 px-5 rounded-lg"
    :class="isAccentBg ? 'bg-accent' : 'bg-white'"
  >
    {{ text }}<img src="/icons/arrow.svg" />
  </button>
</template>
