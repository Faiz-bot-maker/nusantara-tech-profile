<script setup lang="ts">
import { useAccessControl } from '../composables/useAccessControl'

const { noticeMessage, showNotice } = useAccessControl()
</script>

<template>
  <transition name="toast-pop">
    <div
      v-if="showNotice"
      class="notice-toast"
      role="status"
      aria-live="polite"
    >
      <span class="toast-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 12.75 11.25 15 15 9.75" />
          <path d="M2.18 19a2.25 2.25 0 0 0 2 3.25h15.66a2.25 2.25 0 0 0 1.99-3.25L13.99 3.5a2.24 2.24 0 0 0-3.98 0L2.18 19Z" />
        </svg>
      </span>
      <p class="toast-text">{{ noticeMessage }}</p>
      <span class="toast-dot" aria-hidden="true"></span>
    </div>
  </transition>
</template>

<style scoped>
.notice-toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1200;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: min(560px, calc(100vw - 32px));
  padding: 14px 20px;
  border-radius: 16px;
  background: var(--surface);
  border: 1px solid rgba(14, 165, 233, 0.3);
  box-shadow: 0 24px 60px -20px rgba(2, 132, 199, 0.4);
}

.toast-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(14, 165, 233, 0.12);
  color: var(--primary);
  display: grid;
  place-items: center;
}

.toast-icon svg {
  width: 18px;
  height: 18px;
}

.toast-text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text);
  flex-grow: 1;
}

.toast-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cta);
  animation: toastPing 1.8s ease-in-out infinite;
}

@keyframes toastPing {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.35);
  }
}

.toast-pop-enter-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-pop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.toast-pop-enter-from,
.toast-pop-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}

@media (max-width: 640px) {
  .notice-toast {
    bottom: 16px;
    padding: 12px 16px;
  }
}
</style>