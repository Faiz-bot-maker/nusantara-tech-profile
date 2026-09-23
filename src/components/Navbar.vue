<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAccessControl } from '../composables/useAccessControl'

const { isUnlocked, unlock, handleNavClick } = useAccessControl()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Visi & Misi', href: '#visi-misi' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kontak', href: '#kontak' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
  updateActiveSection()
}

const updateActiveSection = () => {
  let current = ''
  for (const link of navLinks) {
    const el = document.querySelector(link.href)
    if (!el) continue
    const top = (el as HTMLElement).getBoundingClientRect().top
    if (top <= 160 && top > -320) {
      current = link.href
    }
  }
  activeSection.value = current
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const onLinkClick = (e: MouseEvent, href: string) => {
  const allowed = handleNavClick(e, href)
  if (allowed !== false) {
    mobileMenuOpen.value = false
    activeSection.value = href
  }
}

const onCtaClick = (e: MouseEvent) => {
  if (!isUnlocked.value) {
    e.preventDefault()
    unlock('#kontak')
  }
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="container navbar-inner">
      <!-- Brand Logo -->
      <a href="#beranda" class="navbar-brand">
        <span class="brand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
            <path d="m10 12.5 2-2 2 2-2 2-2-2Z" />
          </svg>
        </span>
        <span class="brand-name">
          Nusantara<span>Tech</span>
        </span>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="navbar-nav" aria-label="Navigasi Utama">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-link"
              :class="{ 'is-active': activeSection === link.href }"
              :aria-current="activeSection === link.href ? 'true' : undefined"
              @click="(e) => onLinkClick(e, link.href)"
            >
              <span>{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Action Button -->
      <div class="navbar-actions">
        <a
          href="#kontak"
          class="btn-nav btn-cta"
          @click="onCtaClick"
        >
          <span>Hubungi Kami</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m13 17 5-5-5-5" />
            <path d="M6 12h12" />
          </svg>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="mobile-toggle"
          :aria-expanded="mobileMenuOpen"
          aria-label="Buka Menu Navigasi"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <transition name="mobile-drawer">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="container mobile-menu-inner">
          <ul class="mobile-nav-list">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="mobile-nav-link"
                @click="(e) => onLinkClick(e, link.href)"
              >
                <span>{{ link.label }}</span>
              </a>
            </li>
          </ul>

          <div class="mobile-menu-footer">
            <a
              href="#kontak"
              class="btn btn-primary"
              style="width: 100%"
              @click="onCtaClick"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(224, 238, 247, 0.7);
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(11, 18, 32, 0.88);
    border-bottom-color: rgba(34, 51, 74, 0.7);
  }
}

.navbar.is-scrolled {
  box-shadow: 0 10px 30px -10px rgba(2, 132, 199, 0.15);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  gap: 20px;
}

/* Brand */
.navbar-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-deep));
  color: #fff;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 18px -6px rgba(14, 165, 233, 0.5);
  transition: transform 0.3s ease;
}

.brand-icon svg {
  width: 22px;
  height: 22px;
}

.navbar-brand:hover .brand-icon {
  transform: rotate(-6deg) scale(1.06);
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--heading);
  letter-spacing: -0.02em;
}

.brand-name span {
  color: var(--primary);
}

/* Desktop Nav Links */
.navbar-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 6px;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: var(--primary);
  background: rgba(14, 165, 233, 0.08);
}

.nav-link.is-active {
  color: var(--primary);
  background: rgba(14, 165, 233, 0.1);
  font-weight: 600;
}

.nav-link.is-active span {
  position: relative;
}

.nav-link.is-active span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

/* Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-nav {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
}

.btn-nav svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.btn-nav:hover svg {
  transform: translateX(3px);
}

.btn-cta {
  background: linear-gradient(135deg, var(--primary), var(--primary-deep));
  color: #fff;
  box-shadow: 0 6px 16px -4px rgba(14, 165, 233, 0.45);
}

.btn-cta:hover {
  box-shadow: 0 10px 22px -4px rgba(14, 165, 233, 0.55);
  transform: translateY(-1px);
}

.mobile-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--heading);
  cursor: pointer;
  place-items: center;
}

.mobile-toggle svg {
  width: 22px;
  height: 22px;
}

/* Mobile Drawer */
.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 20px 0 28px;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 12px;
  color: var(--heading);
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s;
}

.mobile-nav-link:hover {
  background: rgba(14, 165, 233, 0.08);
}

.mobile-menu-footer {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

@media (max-width: 960px) {
  .navbar-nav {
    display: none;
  }

  .mobile-toggle {
    display: grid;
  }

  .mobile-menu {
    display: block;
  }
}
</style>
