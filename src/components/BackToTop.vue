<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 380
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
  checkScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <transition name="back-to-top">
    <button
      v-if="isVisible"
      type="button"
      class="floating-top-btn"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      @click="scrollToTop"
    >
      <span class="icon-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </span>
      <span class="tooltip-label">Ke Atas</span>
    </button>
  </transition>
</template>

<style scoped>
.floating-top-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--surface);
  color: var(--primary);
  border: 1.5px solid var(--border);
  box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 950;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0;
}

@media (prefers-color-scheme: dark) {
  .floating-top-btn {
    background: #111c2e;
    border-color: #22334a;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.6);
  }
}

.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.icon-wrap svg {
  width: 22px;
  height: 22px;
}

.tooltip-label {
  position: absolute;
  right: 58px;
  padding: 5px 10px;
  border-radius: 8px;
  background: var(--heading);
  color: #fff;
  font-size: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.floating-top-btn:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  transform: translateY(-4px);
  box-shadow: 0 14px 30px -4px rgba(14, 165, 233, 0.55);
}

.floating-top-btn:hover .icon-wrap {
  transform: translateY(-2px);
}

.floating-top-btn:hover .tooltip-label {
  opacity: 1;
  transform: translateX(0);
}

.floating-top-btn:active {
  transform: translateY(-1px) scale(0.96);
}

.floating-top-btn:focus-visible {
  outline: 3px solid var(--secondary);
  outline-offset: 3px;
}

/* Transisi Muncul/Hilang */
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: scale(0.7) translateY(16px);
}
</style>
