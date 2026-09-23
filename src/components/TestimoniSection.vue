<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useReveal } from '../composables/useReveal'

const { bind } = useReveal()

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  quote: string
  tag: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'PT Maju Bersama Digital',
    avatar: 'BS',
    rating: 5,
    quote:
      'Nusantara Tech benar-benar mengubah cara bisnis kami beroperasi. Platform e-commerce yang mereka bangun berhasil meningkatkan konversi kami sebesar 340% dalam 6 bulan pertama. Tim mereka sangat profesional dan responsif.',
    tag: 'E-Commerce Platform',
  },
  {
    id: 2,
    name: 'Sari Dewi Lestari',
    role: 'CTO',
    company: 'Fintech Nusantara Group',
    avatar: 'SD',
    rating: 5,
    quote:
      'Infrastruktur cloud yang dibangun tim Nusantara Tech sangat andal. Uptime kami kini mencapai 99.98% dan biaya operasional turun drastis. Keahlian mereka di bidang DevOps dan Kubernetes benar-benar kelas dunia.',
    tag: 'Cloud Infrastructure',
  },
  {
    id: 3,
    name: 'Rizky Firmansyah',
    role: 'Head of Product',
    company: 'Startup Edukasi Cerdas',
    avatar: 'RF',
    rating: 5,
    quote:
      'Aplikasi mobile pembelajaran kami mendapat rating 4.9 di App Store dan Play Store berkat kerja keras tim Nusantara Tech. Animasi halus dan performa yang luar biasa membuat pengguna kami sangat puas.',
    tag: 'Mobile App Development',
  },
  {
    id: 4,
    name: 'Anita Rahayu',
    role: 'Direktur IT',
    company: 'Rumah Sakit Pratama Group',
    avatar: 'AR',
    rating: 5,
    quote:
      'Sistem manajemen rumah sakit terintegrasi yang mereka kembangkan sangat membantu efisiensi operasional kami. Audit keamanan siber yang mereka lakukan juga sangat menyeluruh dan memberikan rasa aman bagi seluruh stakeholder.',
    tag: 'Healthcare System',
  },
  {
    id: 5,
    name: 'Eko Prasetyo',
    role: 'VP Engineering',
    company: 'Logistik Kilat Indonesia',
    avatar: 'EP',
    rating: 5,
    quote:
      'Dashboard analitika real-time yang dibangun Nusantara Tech memungkinkan kami memantau 50.000+ pengiriman per hari dengan akurat. Integrasi AI-nya sangat membantu memprediksi bottleneck operasional.',
    tag: 'AI & Analytics',
  },
  {
    id: 6,
    name: 'Mega Puspita',
    role: 'Brand Director',
    company: 'Fashion Forward Co.',
    avatar: 'MP',
    rating: 5,
    quote:
      'Redesain UI/UX platform kami oleh Nusantara Tech menghasilkan peningkatan waktu kunjungan rata-rata 78% dan bounce rate turun 45%. Desain mereka benar-benar memahami psikologi pengguna.',
    tag: 'UI/UX Design',
  },
]

const currentIndex = ref(0)
let autoTimer: ReturnType<typeof setInterval> | null = null

const avatarGradients = [
  'linear-gradient(135deg, #0ea5e9, #22d3ee)',
  'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'linear-gradient(135deg, #f59e0b, #f97316)',
  'linear-gradient(135deg, #10b981, #14b8a6)',
  'linear-gradient(135deg, #ef4444, #f97316)',
  'linear-gradient(135deg, #8b5cf6, #ec4899)',
]

function avatarStyle(seed: number) {
  return { background: avatarGradients[seed % avatarGradients.length] }
}

function goTo(index: number) {
  currentIndex.value = (index + testimonials.length) % testimonials.length
}

function next() {
  goTo(currentIndex.value + 1)
}

function prev() {
  goTo(currentIndex.value - 1)
}

function startAuto() {
  stopAuto()
  autoTimer = setInterval(() => next(), 5000)
}

function stopAuto() {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

onMounted(() => startAuto())
onBeforeUnmount(() => stopAuto())
</script>

<template>
  <section id="testimoni" class="testimonials">
    <div class="blob blob-left" aria-hidden="true"></div>
    <div class="blob blob-right" aria-hidden="true"></div>

    <div class="container">
      <div class="testimonials-head reveal" :ref="bind">
        <span class="section-eyebrow">Testimoni Klien</span>
        <h2 class="section-title">Dipercaya oleh Bisnis<br />yang Terus Bertumbuh</h2>
        <p class="section-lead">
          Lebih dari 120+ perusahaan dari berbagai industri telah mempercayakan transformasi
          digital mereka kepada kami. Inilah yang mereka katakan.
        </p>

        <div class="rating-summary">
          <div class="rating-stars" aria-hidden="true">
            <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" fill="currentColor" class="rating-star">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118L4.08 9.96c-.783-.57-.38-1.81.589-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z" />
            </svg>
          </div>
          <strong class="rating-score">4.9/5</strong>
          <span class="rating-note">dari 120+ klien selama 8 tahun</span>
        </div>
      </div>

      <div
        class="carousel-wrapper reveal"
        :ref="bind"
        @mouseenter="stopAuto"
        @mouseleave="startAuto"
        @focusin="stopAuto"
        @focusout="startAuto"
      >
        <div class="carousel-track">
          <transition name="slide-fade" mode="out-in">
            <article class="testi-card" :key="testimonials[currentIndex].id">
              <div class="quote-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
                </svg>
              </div>

              <div class="star-row" :aria-label="`Rating ${testimonials[currentIndex].rating} dari 5`">
                <svg
                  v-for="i in 5"
                  :key="i"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="star-icon"
                  :class="{ filled: i <= testimonials[currentIndex].rating }"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>

              <span class="testi-tag">{{ testimonials[currentIndex].tag }}</span>

              <blockquote class="testi-quote">
                &#8220;{{ testimonials[currentIndex].quote }}&#8221;
              </blockquote>

              <div class="testi-author">
                <div class="author-avatar" :style="avatarStyle(currentIndex)">{{ testimonials[currentIndex].avatar }}</div>
                <div class="author-info">
                  <strong class="author-name">{{ testimonials[currentIndex].name }}</strong>
                  <span class="author-role">{{ testimonials[currentIndex].role }}, {{ testimonials[currentIndex].company }}</span>
                </div>
              </div>
            </article>
          </transition>
        </div>

        <div class="carousel-nav">
          <button type="button" class="nav-btn" aria-label="Testimoni sebelumnya" @click="prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div class="dots" role="tablist" aria-label="Navigasi testimoni">
            <button
              v-for="(t, i) in testimonials"
              :key="t.id"
              type="button"
              class="dot"
              :class="{ 'is-active': i === currentIndex }"
              role="tab"
              :aria-selected="i === currentIndex"
              :aria-label="`Testimoni ${i + 1}`"
              @click="goTo(i)"
            ></button>
          </div>

          <button type="button" class="nav-btn" aria-label="Testimoni berikutnya" @click="next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div class="clients-strip reveal" :ref="bind">
        <button
          v-for="(t, i) in testimonials"
          :key="t.id"
          type="button"
          class="strip-avatar"
          :class="{ 'is-active': i === currentIndex }"
          :style="avatarStyle(i)"
          :title="t.name"
          :aria-label="`Lihat testimoni dari ${t.name}`"
          @click="goTo(i); startAuto()"
        >
          {{ t.avatar }}
        </button>
        <span class="clients-count">120+ Klien Puas</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 96px 0;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.blob {
  position: absolute;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.18;
  pointer-events: none;
}

.blob-left {
  background: radial-gradient(circle, var(--primary), transparent 70%);
  top: -100px;
  left: -160px;
}

.blob-right {
  background: radial-gradient(circle, var(--secondary), transparent 70%);
  bottom: -120px;
  right: -160px;
}

.testimonials-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 56px;
}

.rating-summary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 26px;
  padding: 8px 18px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.rating-stars {
  display: flex;
  gap: 2px;
}

.rating-star {
  width: 17px;
  height: 17px;
  color: #f59e0b;
}

.rating-score {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 800;
  color: var(--heading);
}

.rating-note {
  font-size: 0.84rem;
  color: var(--muted);
}

.carousel-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

.carousel-track {
  position: relative;
  min-height: 320px;
}

.testi-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 48px 52px;
  box-shadow: var(--shadow);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.quote-icon {
  position: absolute;
  top: 28px;
  right: 36px;
  width: 44px;
  height: 44px;
  color: rgba(14, 165, 233, 0.12);
}

.quote-icon svg {
  width: 100%;
  height: 100%;
}

.star-row {
  display: flex;
  gap: 4px;
}

.star-icon {
  width: 20px;
  height: 20px;
  color: var(--border);
}

.star-icon.filled {
  color: #f59e0b;
}

.testi-tag {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.25);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: fit-content;
}

.testi-quote {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--heading);
  font-style: italic;
  font-family: var(--font-body);
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
}

.author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow: 0 6px 18px -4px rgba(14, 165, 233, 0.45);
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.author-name {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--heading);
}

.author-role {
  font-size: 0.85rem;
  color: var(--muted);
}

.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
}

.nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  background: var(--surface);
  color: var(--heading);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-btn svg {
  width: 20px;
  height: 20px;
}

.nav-btn:hover {
  border-color: var(--primary);
  background: var(--primary);
  color: #fff;
  box-shadow: 0 6px 18px -4px rgba(14, 165, 233, 0.45);
  transform: translateY(-2px);
}

.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.is-active {
  width: 28px;
  border-radius: 4px;
  background: var(--primary);
}

.clients-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
}

.strip-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-deep), var(--primary));
  color: #fff;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: 2.5px solid var(--bg-soft);
  transition: all 0.25s ease;
  opacity: 0.5;
  margin-left: -10px;
}

.strip-avatar:first-child {
  margin-left: 0;
}

.strip-avatar.is-active,
.strip-avatar:hover {
  opacity: 1;
  border-color: var(--primary);
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px -6px rgba(14, 165, 233, 0.5);
  z-index: 1;
}

.clients-count {
  margin-left: 20px;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--muted);
}

.slide-fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

@media (max-width: 768px) {
  .testimonials {
    padding: 64px 0;
  }

  .testi-card {
    padding: 32px 24px;
  }

  .testi-quote {
    font-size: 1rem;
  }

  .carousel-track {
    min-height: 420px;
  }
}

@media (max-width: 480px) {
  .clients-strip {
    flex-wrap: wrap;
    gap: 8px;
  }

  .strip-avatar {
    margin-left: 0;
  }
}
</style>
