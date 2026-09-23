<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const { bind } = useReveal()

const isExpanded = ref(false)

const values = [
  {
    title: 'Inovasi Berkelanjutan',
    text: 'Kami selalu mengadopsi teknologi terkini agar solusi yang Anda miliki tetap relevan dan kompetitif.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z',
  },
  {
    title: 'Kolaborasi Terbuka',
    text: 'Kami bekerja bersama Anda sebagai mitra, bukan sekadar vendor, untuk memahami kebutuhan secara mendalam.',
    icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
  },
  {
    title: 'Integritas & Keamanan',
    text: 'Standar keamanan tinggi dan transparansi menjadi fondasi setiap produk yang kami bangun.',
    icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
  {
    title: 'Fokus pada Hasil',
    text: 'Setiap solusi kami ukur dari dampak nyatanya: efisiensi operasional meningkat, biaya terkendali, dan pengalaman pelanggan yang lebih baik.',
    icon: 'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
  },
  {
    title: 'Dukungan Berkelanjutan',
    text: 'Tersedia pendampingan pasca-peluncuran — pemeliharaan, pemantauan, hingga pengembangan fitur — agar produk Anda stabil dan terus bertumbuh.',
    icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
  },
  {
    title: 'Skalabilitas Jangka Panjang',
    text: 'Arsitektur modular yang kami rancang siap berkembang mengikuti pertumbuhan bisnis Anda tanpa membangun ulang dari awal.',
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  },
]

const extraParagraphs = [
  'Berdiri sejak 2018, kami telah menemani berbagai skala bisnis — dari startup yang baru merintis hingga korporasi mapan — dalam merancang, membangun, dan mengembangkan produk digital yang tepat sasaran.',
  'Bersama Nusantara Tech, Anda tidak hanya mendapatkan vendor teknologi, melainkan mitra strategis yang memahami konteks bisnis Indonesia dan berkomitmen pada hasil jangka panjang.',
]

const stats = [
  { num: '150+', label: 'Proyek Selesai' },
  { num: '80+', label: 'Klien Aktif' },
  { num: '120+', label: 'Talenta Digital' },
  { num: '8 Tahun', label: 'Pengalaman Industri' },
]
</script>

<template>
  <section id="tentang" class="about">
    <div class="container about-grid">
      <div class="about-visual reveal" :ref="bind" aria-hidden="true">
        <div class="about-panel">
          <div class="about-mark">
            <svg class="about-mark-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
              <path d="m10 12.5 2-2 2 2-2 2-2-2Z" />
            </svg>
          </div>
          <div class="about-text">
            <span>Nusantara Tech</span>
          </div>
          <div class="about-badge">
            <strong>Sejak 2018</strong>
            <span>Melayani transformasi digital Nusantara</span>
          </div>
        </div>
      </div>

      <div class="about-copy">
        <span class="section-eyebrow">Tentang Kami</span>
        <h2 class="section-title">Partner Digital Untuk Bisnis<br />yang Ingin Bertumbuh</h2>
        <p class="section-lead">
          Nusantara Tech adalah perusahaan teknologi yang berdedikasi
          mempercepat transformasi digital bisnis di Indonesia. Dengan tim
          insinyur, desainer, dan konsultan berpengalaman, kami merancang
          solusi perangkat lunak yang aman, skalabel, dan selaras dengan tujuan
          bisnis Anda.
        </p>

        <div class="about-values">
          <article
            v-for="value in values.slice(0, 3)"
            :key="value.title"
            class="about-value reveal"
            :ref="bind"
          >
            <span class="about-value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path :d="value.icon" />
              </svg>
            </span>
            <div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.text }}</p>
            </div>
          </article>
        </div>

        <transition name="about-expand">
          <div v-show="isExpanded" id="about-extra" class="about-extra">
            <p v-for="paragraph in extraParagraphs" :key="paragraph" class="about-extra-text">
              {{ paragraph }}
            </p>

            <div class="about-values">
              <article
                v-for="value in values.slice(3)"
                :key="value.title"
                class="about-value reveal"
                :ref="bind"
              >
                <span class="about-value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path :d="value.icon" />
                  </svg>
                </span>
                <div>
                  <h3>{{ value.title }}</h3>
                  <p>{{ value.text }}</p>
                </div>
              </article>
            </div>

            <div class="about-stats">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="about-stat reveal"
                :ref="bind"
              >
                <strong>{{ stat.num }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </transition>

        <button
          type="button"
          class="about-toggle"
          :class="{ 'is-open': isExpanded }"
          :aria-expanded="isExpanded"
          aria-controls="about-extra"
          @click="isExpanded = !isExpanded"
        >
          <span>{{ isExpanded ? 'Tampilkan Lebih Sedikit' : 'Lihat Selengkapnya' }}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 96px 0;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 6vw, 88px);
  align-items: center;
}

.about-visual {
  position: relative;
}

.about-panel {
  position: relative;
  border-radius: 24px;
  padding: 64px 40px 44px;
  background: linear-gradient(150deg, #0ea5e9 0%, #0369a1 100%);
  box-shadow: 0 24px 60px -24px rgba(14, 165, 233, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.about-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.18) 0 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 80% 15%,
      rgba(255, 255, 255, 0.14) 0 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 30% 85%,
      rgba(255, 255, 255, 0.12) 0 2px,
      transparent 3px
    ),
    radial-gradient(
      circle at 75% 70%,
      rgba(255, 255, 255, 0.16) 0 2px,
      transparent 3px
    );
}

.about-mark {
  position: relative;
  z-index: 1;
  width: 92px;
  height: 92px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.32);
  display: grid;
  place-items: center;
  color: #fff;
  animation: pulseSoft 5s ease-in-out infinite;
}

.about-mark svg {
  width: 46px;
  height: 46px;
}

.about-text {
  position: relative;
  z-index: 1;
  text-align: center;
}

.about-text span {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}

.about-badge {
  position: relative;
  z-index: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 22px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  text-align: center;
  max-width: 100%;
  animation: float 6s ease-in-out infinite;
}

.about-badge strong {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  color: var(--heading);
}

.about-badge span {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.45;
}

.about-values {
  margin-top: 34px;
  display: grid;
  gap: 26px;
}

.about-value {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition-delay: 0s;
}

.about-value:nth-child(2) {
  transition-delay: 0.08s;
}

.about-value:nth-child(3) {
  transition-delay: 0.16s;
}

.about-value-icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: var(--primary);
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.2);
  translate: 0 0;
  transition: translate 0.25s ease, box-shadow 0.25s ease;
}

.about-value:hover .about-value-icon {
  translate: 0 -4px;
  box-shadow: var(--shadow);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes pulseSoft {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.about-value-icon svg {
  width: 24px;
  height: 24px;
}

.about-value h3 {
  margin: 0 0 4px;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  color: var(--heading);
}

.about-value p {
  margin: 0;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.6;
}

.about-extra {
  margin-top: 30px;
  display: grid;
  gap: 26px;
}

.about-extra-text {
  color: var(--text);
  font-size: 0.98rem;
  line-height: 1.75;
}

.about-extra .about-values {
  margin-top: 0;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--bg-soft);
}

.about-stat {
  padding: 8px 10px;
  text-align: center;
  transition-delay: 0s;
}

.about-stat:nth-child(2) {
  transition-delay: 0.06s;
}

.about-stat:nth-child(3) {
  transition-delay: 0.12s;
}

.about-stat:nth-child(4) {
  transition-delay: 0.18s;
}

.about-stat strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--primary);
}

.about-stat span {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.4;
}

.about-toggle {
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  border: 1px solid rgba(14, 165, 233, 0.35);
  background: rgba(14, 165, 233, 0.08);
  color: var(--primary-deep);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    color 0.2s ease, transform 0.2s ease;
}

.about-toggle svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.about-toggle.is-open svg {
  transform: rotate(180deg);
}

.about-toggle:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

.about-toggle:focus-visible {
  outline: 3px solid var(--secondary);
  outline-offset: 3px;
}

.about-expand-enter-active,
.about-expand-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.about-expand-enter-from,
.about-expand-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 900px) {
  .about {
    padding: 64px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-visual {
    max-width: 420px;
  }

  .about-panel {
    padding: 48px 28px 40px;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
