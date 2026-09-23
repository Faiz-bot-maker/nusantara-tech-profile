<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const stats = [
  { value: 120, suffix: '+', label: 'Proyek Selesai' },
  { value: 50, suffix: '+', label: 'Klien Aktif' },
  { value: 8, suffix: ' Tahun', label: 'Pengalaman' },
  { value: 98, suffix: '%', label: 'Kepuasan Klien' },
]

const displayed = ref(stats.map(() => 0))
const statsEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let raf = 0

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    displayed.value = stats.map((s) => s.value)
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCountUp()
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.4 },
  )
  if (statsEl.value) observer.observe(statsEl.value)
})

function runCountUp() {
  const start = performance.now()
  const duration = 1400
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayed.value = stats.map((s) => Math.round(s.value * eased))
    if (progress < 1) raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
}

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="beranda" class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="hero-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
            <path d="M12 22V7" />
            <path d="m3 7 9 5 9-5" />
            <path d="m3 17 9-5 9 5" />
          </svg>
          Solusi Teknologi Terpercaya
        </span>

        <h1 class="hero-title">
          Membangun Masa Depan<br />
          <span>Digital Nusantara</span>
        </h1>

        <p class="hero-subtitle">
          Kami membantu bisnis di Indonesia berinovasi dan tumbuh melalui
          teknologi. Dari pengembangan perangkat lunak hingga transformasi
          digital, kami menghadirkan solusi yang aman, cepat, dan terukur.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#visi-misi">
            Mulai Berkolaborasi
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a class="btn btn-secondary" href="#tentang">Pelajari Lebih Jauh</a>
        </div>

        <dl ref="statsEl" class="hero-stats">
          <div v-for="(stat, i) in stats" :key="stat.label" class="hero-stat">
            <dt>{{ displayed[i] }}{{ stat.suffix }}</dt>
            <dd>{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 520 430" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="520" y2="430" gradientUnits="userSpaceOnUse">
              <stop stop-color="#38BDF8" />
              <stop offset="1" stop-color="#0EA5E9" />
            </linearGradient>
            <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#0284C7" flood-opacity="0.18" />
            </filter>
          </defs>

          <circle cx="420" cy="70" r="130" fill="url(#skyGrad)" opacity="0.14" class="hero-glow" />
          <circle cx="60" cy="360" r="100" fill="url(#skyGrad)" opacity="0.10" class="hero-glow hero-glow--2" />

          <g class="hero-float">
            <rect x="42" y="56" width="300" height="206" rx="18" fill="#FFFFFF" filter="url(#soft)" />
            <circle cx="72" cy="80" r="5" fill="#F97316" />
            <circle cx="92" cy="80" r="5" fill="#38BDF8" />
            <circle cx="112" cy="80" r="5" fill="#CBD5E1" />
            <g fill="#E0F2FE">
              <rect x="72" y="106" width="180" height="14" rx="7" />
              <rect x="72" y="138" width="240" height="14" rx="7" />
              <rect x="72" y="170" width="150" height="14" rx="7" />
              <rect x="72" y="202" width="210" height="14" rx="7" />
            </g>
            <rect x="250" y="106" width="62" height="14" rx="7" fill="#0EA5E9" />
            <rect x="250" y="202" width="62" height="14" rx="7" fill="#38BDF8" />
          </g>

          <g class="hero-float-2">
            <rect x="290" y="226" width="200" height="162" rx="18" fill="#FFFFFF" filter="url(#soft)" />
            <g fill="#38BDF8" opacity="0.85">
              <rect x="316" y="256" width="24" height="64" rx="7" />
              <rect x="352" y="238" width="24" height="82" rx="7" />
              <rect x="388" y="270" width="24" height="50" rx="7" />
              <rect x="424" y="244" width="24" height="76" rx="7" />
            </g>
            <g fill="#BAE6FD">
              <rect x="316" y="344" width="46" height="8" rx="4" />
              <rect x="440" y="344" width="24" height="8" rx="4" />
            </g>
            <g fill="#BAE6FD">
              <circle cx="316" cy="368" r="3" />
              <circle cx="328" cy="368" r="3" />
              <circle cx="340" cy="368" r="3" />
              <circle cx="352" cy="368" r="3" />
            </g>
          </g>

          <g class="hero-pulse">
            <circle cx="404" cy="120" r="52" fill="url(#skyGrad)" />
            <path d="M390 120l10 10 20-22" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 88px 0 0;
  background: linear-gradient(180deg, #f0f9ff 0%, #ffffff 92%);
  border-bottom: 1px solid var(--border);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.hero-copy {
  animation: rise 0.7s ease both;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid rgba(14, 165, 233, 0.25);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hero-badge svg {
  width: 18px;
  height: 18px;
}

.hero-title {
  margin: 22px 0 18px;
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.6vw, 3.7rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--heading);
  font-weight: 700;
}

.hero-title span {
  background: linear-gradient(92deg, var(--primary), var(--primary-deep));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  max-width: 44rem;
  color: var(--text);
  font-size: 1.05rem;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 42px 0 0;
  padding: 24px 0 0;
  border-top: 1px solid var(--border);
}

.hero-stat dt {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--heading);
  font-variant-numeric: tabular-nums;
}

.hero-stat {
  animation: rise 0.6s ease both;
}

.hero-stat:nth-child(1) {
  animation-delay: 0.5s;
}
.hero-stat:nth-child(2) {
  animation-delay: 0.6s;
}
.hero-stat:nth-child(3) {
  animation-delay: 0.7s;
}
.hero-stat:nth-child(4) {
  animation-delay: 0.8s;
}

.hero-stat dd {
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: var(--muted);
}

.hero-visual {
  animation: rise 0.7s 0.15s ease both;
}

.hero-svg {
  width: 100%;
  height: auto;
  display: block;
}

.hero-glow {
  animation: glow 7s ease-in-out infinite;
}

.hero-glow--2 {
  animation-delay: 1.4s;
}

.hero-float {
  animation: float 6s ease-in-out infinite;
}

.hero-float-2 {
  animation: float 7.5s ease-in-out 1s infinite;
}

.hero-pulse {
  transform-box: fill-box;
  transform-origin: center;
  animation: pulseSoft 5s ease-in-out infinite;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulseSoft {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.14;
  }
  50% {
    opacity: 0.22;
  }
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    max-width: 480px;
  }
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy,
  .hero-visual {
    animation: none;
  }
}
</style>