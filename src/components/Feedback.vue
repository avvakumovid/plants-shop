<script setup>
import { ref } from 'vue'
import container from './Container.vue'
const element = ref(null)
const pos = ref({ x: 0, left: 0 })
const isMouseDown = ref(false)
const handleMouseDown = (e) => {
  console.log(e)
  // isMouseDown.value = true
  pos.value = {
    left: element.scrollLeft,
    x: e.clientX,
  }
}

const handleMouseUp = (e) => {
  isMouseDown.value = false
}
const handleMouseMove = (e) => {
  if (isMouseDown.value) {
    const dx = e.clientX - pos.value.x
    element.value.scrollLeft = pos.value.left - dx
    console.log(e.clientX, pos.value.x, element.value)
  }
}
</script>

<template>
  <container>
    <div class="relative h-[800px]">
      <section class="absolute z-50">
        <h2 class="text-3.5xl max-w-lg mb-12 leading-normal font-bold">
          What customers say about GREEMIND?
        </h2>
        <div
          ref="element"
          @mousemove="handleMouseMove"
          @mousedown="handleMouseDown"
          @mouseup="handleMouseUp"
          class="flex flex-row gap-x-12 overflow-x-scroll visible-scroll w-[100vw] mb-[230px] pb-1"
        >
          <div class="flex flex-col min-w-[800px] rounded-xl bg-accent p-12 pb-0">
            <p class="text-custom-black-100 mb-[54px]">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <div class="flex flex-row w-full">
              <img src="/reviewer-1.png" class="mr-2 -mt-[54px]" />
              <div class="flex flex-row w-full justify-between">
                <div>
                  <h3 class="font-bold">John Doe</h3>
                  <span class="text-xs text-custom-black-200">Youtuber</span>
                </div>
                <div>
                  <img src="/icons/star.svg" class="mr-3" />
                  <span class="font-bold">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col min-w-[800px] rounded-xl bg-accent p-12 pb-0">
            <p class="text-custom-black-100 mb-[54px]">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <div class="flex flex-row w-full">
              <img src="/reviewer-2.png" class="mr-2 -mt-[54px]" />
              <div class="flex flex-row w-full justify-between">
                <div>
                  <h3 class="font-bold">John Doe</h3>
                  <span class="text-xs text-custom-black-200">Youtuber</span>
                </div>
                <div>
                  <img src="/icons/star.svg" class="mr-3" />
                  <span class="font-bold">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col min-w-[800px] rounded-xl bg-accent p-12 pb-0">
            <p class="text-custom-black-100 mb-[54px]">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <div class="flex flex-row w-full">
              <img src="/reviewer-2.png" class="mr-2 -mt-[54px]" />
              <div class="flex flex-row w-full justify-between">
                <div>
                  <h3 class="font-bold">John Doe</h3>
                  <span class="text-xs text-custom-black-200">Youtuber</span>
                </div>
                <div>
                  <img src="/icons/star.svg" class="mr-3" />
                  <span class="font-bold">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col min-w-[800px] rounded-xl bg-accent p-12 pb-0">
            <p class="text-custom-black-100 mb-[54px]">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <div class="flex flex-row w-full">
              <img src="/reviewer-2.png" class="mr-2 -mt-[54px]" />
              <div class="flex flex-row w-full justify-between">
                <div>
                  <h3 class="font-bold">John Doe</h3>
                  <span class="text-xs text-custom-black-200">Youtuber</span>
                </div>
                <div>
                  <img src="/icons/star.svg" class="mr-3" />
                  <span class="font-bold">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col min-w-[1070px] rounded-xl bg-white p-12 pb-0"></div>
        </div>
      </section>
    </div>
  </container>
</template>

<style setup></style>
