<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const currentSlide = ref(0)
const dragStartX = ref(null)

const slides = [
  {
    image: '/images/decal-it/gallery-1.jpg',
    title: 'Curved Surface Placement',
    caption: 'Place decals on curved hard-surface forms.'
  },
  {
    image: '/images/decal-it/gallery-2.jpg',
    title: 'Viewport Edit Mode',
    caption: 'Resize, rotate, align, and edit decal placement directly in the viewport.'
  },
  {
    image: '/images/decal-it/gallery-3.jpg',
    title: 'Decal Carve',
    caption: 'Trim decal regions and refine the final surface result.'
  }
]

const activeSlide = computed(() => slides[currentSlide.value])

function previousSlide() {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

function nextSlide() {
  currentSlide.value = currentSlide.value === slides.length - 1 ? 0 : currentSlide.value + 1
}

function goToSlide(index) {
  currentSlide.value = index
}

function onKeydown(event) {
  if (event.key === 'ArrowLeft') {
    previousSlide()
  }

  if (event.key === 'ArrowRight') {
    nextSlide()
  }
}

function startDrag(event) {
  dragStartX.value = event.clientX
}

function endDrag(event) {
  if (dragStartX.value === null) {
    return
  }

  const delta = event.clientX - dragStartX.value
  dragStartX.value = null

  if (Math.abs(delta) < 48) {
    return
  }

  if (delta > 0) {
    previousSlide()
  } else {
    nextSlide()
  }
}
</script>

<template>
  <section class="bam-slider" aria-label="BAM Decal IT gallery" tabindex="0" @keydown="onKeydown">
    <div class="bam-slider-viewport" @pointerdown="startDrag" @pointerup="endDrag" @pointercancel="dragStartX = null">
      <div class="bam-slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <figure v-for="slide in slides" :key="slide.image" class="bam-slider-slide">
          <img :src="withBase(slide.image)" :alt="slide.title">
        </figure>
      </div>

      <div class="bam-slider-controls" aria-label="Gallery controls">
        <button class="bam-slider-arrow" type="button" aria-label="Previous gallery image" @click="previousSlide">
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <button class="bam-slider-arrow" type="button" aria-label="Next gallery image" @click="nextSlide">
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>

      <div class="bam-slider-dots" aria-label="Gallery slides">
        <button
          v-for="(slide, index) in slides"
          :key="slide.image"
          type="button"
          :aria-label="`Show ${slide.title}`"
          :aria-current="index === currentSlide ? 'true' : 'false'"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>

    <div class="bam-slider-panel">
      <div>
        <p class="bam-slider-count">{{ currentSlide + 1 }} / {{ slides.length }}</p>
        <h3>{{ activeSlide.title }}</h3>
        <p>{{ activeSlide.caption }}</p>
      </div>
    </div>
  </section>
</template>
