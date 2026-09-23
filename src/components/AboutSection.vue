<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const { bind } = useReveal()

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
        </div>
        <div class="about-badge">
          <strong>Sejak 2019</strong>
          <span>Melayani transformasi digital Nusantara</span>
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
            v-for="value in values"
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
  padding: 72px 40px;
  background: linear-gradient(150deg, #0ea5e9 0%, #0369a1 100%);
  box-shadow: 0 24px 60px -24px rgba(14, 165, 233, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: absolute;
  bottom: 26px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

.about-text span {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
}

.about-badge {
  position: absolute;
  right: -24px;
  bottom: 34px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 230px;
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
    transform: translateY(-10px);
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

  .about-badge {
    right: 0;
  }
}
</style>
