<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import VisionMissionSection from './components/VisionMissionSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TestimoniSection from './components/TestimoniSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useAccessControl } from './composables/useAccessControl'

const { isUnlocked } = useAccessControl()

// Mengunci scroll browser sebelum tombol berkolaborasi ditekan
watch(
  isUnlocked,
  (unlocked) => {
    if (typeof document !== 'undefined') {
      if (unlocked) {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
      } else {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
      }
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
})
</script>

<template>
  <div class="app-wrapper" :class="{ 'is-locked-view': !isUnlocked }">
    <!-- Navbar Header: Tersembunyi sebelum masuk (muncul setelah tombol berkolaborasi ditekan) -->
    <transition name="nav-slide">
      <Navbar v-if="isUnlocked" />
    </transition>

    <main id="main-content">
      <!-- Beranda: Satu-satunya halaman yang tampil di awal tanpa bisa scroll -->
      <HeroSection />

      <!-- Bagian Konten Lainnya: Muncul setelah tombol berkolaborasi ditekan -->
      <transition name="content-fade">
        <div v-if="isUnlocked" class="unlocked-content">
          <AboutSection />
          <VisionMissionSection />
          <ServicesSection />
          <TestimoniSection />
          <ContactSection />
        </div>
      </transition>
    </main>

    <!-- Footer: Hanya muncul setelah masuk ke menu lainnya -->
    <FooterSection v-if="isUnlocked" />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-wrapper.is-locked-view {
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

#main-content {
  flex-grow: 1;
}

/* Animasi Navbar Slide-Down */
.nav-slide-enter-active,
.nav-slide-leave-active {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.nav-slide-enter-from,
.nav-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Animasi Fade Konten */
.content-fade-enter-active {
  transition: opacity 0.6s ease;
}

.content-fade-enter-from {
  opacity: 0;
}
</style>