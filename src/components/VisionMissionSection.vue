<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const { bind } = useReveal()

const vision = 'Menjadi perusahaan teknologi terdepan di Asia Tenggara yang mempercepat transformasi digital bisnis Indonesia melalui solusi inovatif, aman, dan terpercaya.'

const missions = [
  {
    title: 'Solusi Tepat Sasaran',
    text: 'Menghadirkan produk dan layanan digital yang mudah diakses, relevan, dan menjawab kebutuhan nyata industri.',
  },
  {
    title: 'Kemitraan Jangka Panjang',
    text: 'Membangun hubungan kolaboratif yang berkelanjutan bersama klien, komunitas, dan ekosistem teknologi lokal.',
  },
  {
    title: 'Pengembangan Talenta Digital',
    text: 'Memberdayakan talenta digital Indonesia melalui transfer ilmu, mentoring, dan budaya pembelajaran berkelanjutan.',
  },
  {
    title: 'Kualitas & Keamanan Utama',
    text: 'Menjaga standar mutu internasional dan keamanan data pada setiap produk yang kami serahkan kepada klien.',
  },
]
</script>

<template>
  <section id="visi-misi" class="vision">
    <div class="container">
      <header class="vision-head reveal" :ref="bind">
        <span class="section-eyebrow">Visi &amp; Misi</span>
        <h2 class="section-title">Arah dan Prinsip Kami</h2>
        <p class="section-lead">
          Visi dan misi ini menjadi kompas bagi seluruh tim dalam setiap
          proyek, kolaborasi, dan keputusan yang kami ambil.
        </p>
      </header>

      <div class="vision-grid">
        <article class="vision-card vision-card--accent">
          <span class="vision-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </span>
          <h3>Visi</h3>
          <p>{{ vision }}</p>
        </article>

        <article class="vision-card">
          <span class="vision-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z" />
              <path d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z" />
              <path d="M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            </svg>
          </span>
          <h3>Misi</h3>
          <ul class="mission-list">
            <li
              v-for="mission in missions"
              :key="mission.title"
              class="reveal"
              :ref="bind"
            >
              <span class="mission-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <div>
                <strong>{{ mission.title }}</strong>
                <p>{{ mission.text }}</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vision {
  padding: 96px 0;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--border);
}

.vision-head {
  max-width: 640px;
  margin: 0 auto 52px;
  text-align: center;
}

.vision-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.vision-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 36px;
  box-shadow: var(--shadow);
  translate: 0 0;
  transition: translate 0.3s ease, box-shadow 0.3s ease;
}

.vision-card:hover {
  translate: 0 -6px;
  box-shadow: 0 26px 56px -22px rgba(2, 132, 199, 0.4);
}

.vision-card--accent {
  background: linear-gradient(150deg, #0ea5e9 0%, #0369a1 100%);
  border: none;
  color: #fff;
  position: sticky;
  top: 24px;
}

.vision-card--accent::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: radial-gradient(
    circle at 85% 15%,
    rgba(255, 255, 255, 0.18) 0 2px,
    transparent 3px
  );
}

.vision-card-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.2);
  color: var(--primary);
  animation: pulseSoft 6s ease-in-out infinite;
}

.vision-card--accent .vision-card-icon {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.32);
  color: #fff;
  position: relative;
  z-index: 1;
}

.vision-card-icon svg {
  width: 28px;
  height: 28px;
}

.vision-card h3 {
  margin: 20px 0 12px;
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--heading);
  position: relative;
  z-index: 1;
}

.vision-card--accent h3 {
  color: #fff;
}

.vision-card--accent p {
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.75;
  font-size: 1.02rem;
}

.mission-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 22px;
}

.mission-list li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition-delay: 0s;
}

.mission-list li:nth-child(2) {
  transition-delay: 0.07s;
}

.mission-list li:nth-child(3) {
  transition-delay: 0.14s;
}

.mission-list li:nth-child(4) {
  transition-delay: 0.21s;
}

.mission-mark {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  margin-top: 2px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--cta);
}

.mission-mark svg {
  width: 15px;
  height: 15px;
}

.mission-list strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--heading);
  margin-bottom: 3px;
}

.mission-list p {
  margin: 0;
  color: var(--text);
  font-size: 0.93rem;
  line-height: 1.6;
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

@media (max-width: 900px) {
  .vision {
    padding: 64px 0;
  }

  .vision-grid {
    grid-template-columns: 1fr;
  }

  .vision-card--accent {
    position: static;
  }
}
</style>