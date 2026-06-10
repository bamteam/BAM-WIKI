<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const isOpen = ref(false)
const switcherEl = ref(null)
const menuEl = ref(null)
const menuStyle = ref({})

const addons = [
  {
    name: 'BAM Decal IT',
    href: '/addons/decal-it/',
    status: 'Available'
  },
  {
    name: 'BAM Automat',
    href: '/addons/automat/',
    status: 'Docs hub'
  }
]

function positionMenu() {
  const rect = switcherEl.value?.getBoundingClientRect()
  if (!rect) return

  menuStyle.value = {
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`
  }
}

async function openMenu() {
  isOpen.value = true
  await nextTick()
  positionMenu()
}

function toggleMenu(event) {
  event?.preventDefault()
  event?.stopPropagation()

  if (isOpen.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

function closeMenu() {
  isOpen.value = false
}

function handleOutsideClick(event) {
  const target = event.target
  if (switcherEl.value?.contains(target) || menuEl.value?.contains(target)) return
  closeMenu()
}

function handleEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', closeMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', closeMenu)
})
</script>

<template>
  <span ref="switcherEl" class="bam-addon-switcher" @click.prevent.stop @mousedown.stop>
    <button
      class="bam-addon-switcher-button"
      type="button"
      aria-label="Switch BAM addon documentation"
      :aria-expanded="String(isOpen)"
      @click.prevent.stop="toggleMenu"
      @keydown.escape.prevent.stop="closeMenu"
    >
      <span class="bam-switcher-chevron" aria-hidden="true"></span>
    </button>

    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="menuEl"
        class="bam-addon-switcher-menu"
        :style="menuStyle"
        @click.stop
        @mousedown.stop
      >
        <a
          v-for="addon in addons"
          :key="addon.name"
          class="bam-addon-switcher-item"
          :href="withBase(addon.href)"
          @click="closeMenu"
        >
          <span>{{ addon.name }}</span>
          <small>{{ addon.status }}</small>
        </a>
      </div>
    </Teleport>
  </span>
</template>
