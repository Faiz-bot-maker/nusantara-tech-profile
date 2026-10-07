<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollProgress = ref(0)
let ticking = false

const updateProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight > 0) {
    scrollProgress.value = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  } else {
    scrollProgress.value = 0
  }
  ticking = false
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateProgress)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div
    class="scroll-progress-bar"
    :style="{ width: `${scrollProgress}%` }"
    role="progressbar"
    :aria-valuenow="Math.round(scrollProgress)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Progress Membaca Halaman"
  />
</template>

<style scoped>
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5px;
  background: linear-gradient(90deg, var(--primary) 0%, #38bdf8 50%, var(--cta) 100%);
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.7), 0 0 4px rgba(249, 115, 22, 0.4);
  z-index: 9999;
  transition: width 0.08s linear;
  pointer-events: none;
}
</style>
