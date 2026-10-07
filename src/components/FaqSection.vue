<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const { bind } = useReveal()

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Berapa lama estimasi waktu pengerjaan sebuah proyek software?',
    answer:
      'Durasi proyek bergantung pada kompleksitas dan ruang lingkup yang dibutuhkan. Untuk pembuatan produk MVP (Minimum Viable Product) atau aplikasi web modern, umumnya memakan waktu 4 hingga 8 minggu. Untuk platform enterprise skala besar, kami menggunakan metodologi Agile dengan sprint 2 mingguan terstruktur, sehingga Anda dapat menguji fitur fungsional secara bertahap sejak awal.',
  },
  {
    question: 'Bagaimana model penetapan biaya dan sistem pembayarannya?',
    answer:
      'Kami menyediakan 3 model kerja sama fleksibel dan transparan: (1) Fixed Milestone — pembayaran bertahap sesuai pencapaian deliverable, (2) Time & Materials — fleksibel untuk produk dinamis, dan (3) Dedicated Tech Team — tim insinyur berdedikasi penuh dengan biaya bulanan terukur. Seluruh penawaran dibuat rinci tanpa ada biaya tersembunyi.',
  },
  {
    question: 'Apakah hak cipta (IP) dan source code sepenuhnya menjadi milik klien?',
    answer:
      'Ya, mutlak 100%. Setelah serah terima proyek selesai, seluruh hak kekayaan intelektual (IP), repositori kode sumber (source code), aset desain antarmuka, dan dokumentasi arsitektur sepenuhnya menjadi milik perusahaan Anda. Kami juga menandatangani Non-Disclosure Agreement (NDA) sebelum kick-off untuk menjamin kerahasiaan penuh ide dan data bisnis Anda.',
  },
  {
    question: 'Apakah ada garansi bebas bug dan layanan pemeliharaan pasca-peluncuran?',
    answer:
      'Tentu saja. Setiap proyek dilengkapi garansi perbaikan bug gratis selama 30 hingga 90 hari setelah go-live. Selain itu, kami menawarkan paket Service Level Agreement (SLA) pemeliharaan jangka panjang yang mencakup monitoring server 24/7, pembaruan keamanan, optimasi performa berkala, dan penanganan insiden darurat.',
  },
]

const activeFaq = ref<number | null>(0)

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <header class="faq-head reveal" :ref="bind">
        <span class="section-eyebrow">Tanya Jawab</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-lead">
          Punya pertanyaan seputar proses pengerjaan, model kerja sama, atau garansi proyek?
          Temukan jawaban atas pertanyaan umum di bawah ini.
        </p>
      </header>

      <div class="faq-accordion-wrap reveal" :ref="bind">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="faq-item"
          :class="{ 'is-open': activeFaq === index }"
        >
          <button
            type="button"
            class="faq-trigger"
            :aria-expanded="activeFaq === index"
            :aria-controls="`faq-ans-${index}`"
            @click="toggleFaq(index)"
          >
            <span class="faq-q-text">{{ faq.question }}</span>
            <span class="faq-icon-indicator" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </button>

          <div
            :id="`faq-ans-${index}`"
            class="faq-collapse"
            role="region"
            :aria-label="faq.question"
          >
            <div class="faq-collapse-inner">
              <p class="faq-answer-text">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Callout Bantuan Tambahan -->
      <div class="faq-help-box reveal" :ref="bind">
        <div class="help-content">
          <div class="help-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <strong>Masih memiliki pertanyaan lain yang belum terjawab?</strong>
            <p>Diskusikan kebutuhan spesifik teknologi dan solusi bisnis Anda langsung dengan tim konsultan kami.</p>
          </div>
        </div>
        <a href="#kontak" class="btn btn-primary faq-contact-btn">
          Konsultasi Sekarang
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 96px 0;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--border);
  position: relative;
}

.faq-head {
  text-align: center;
  max-width: 660px;
  margin: 0 auto 52px;
}

.faq-accordion-wrap {
  max-width: 840px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.faq-item:hover {
  border-color: rgba(14, 165, 233, 0.35);
  box-shadow: 0 12px 30px -10px rgba(14, 165, 233, 0.2);
}

.faq-item.is-open {
  border-color: var(--primary);
  box-shadow: 0 14px 34px -12px rgba(14, 165, 233, 0.3);
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 26px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-heading);
  color: var(--heading);
  transition: color 0.2s ease;
}

.faq-trigger:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: -2px;
}

.faq-q-text {
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.45;
}

.faq-item.is-open .faq-q-text {
  color: var(--primary-deep);
}

.faq-icon-indicator {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(14, 165, 233, 0.08);
  border: 1px solid rgba(14, 165, 233, 0.18);
  color: var(--primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, color 0.2s;
}

.faq-icon-indicator svg {
  width: 18px;
  height: 18px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-icon-indicator {
  background: var(--primary);
  color: #fff;
}

.faq-item.is-open .faq-icon-indicator svg {
  transform: rotate(180deg);
}

/* CSS Grid Transition for Smooth Accordion */
.faq-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-collapse {
  grid-template-rows: 1fr;
}

.faq-collapse-inner {
  overflow: hidden;
}

.faq-answer-text {
  margin: 0;
  padding: 0 26px 24px;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.75;
  border-top: 1px dashed rgba(224, 238, 247, 0.8);
  padding-top: 16px;
}

@media (prefers-color-scheme: dark) {
  .faq-answer-text {
    border-top-color: rgba(34, 51, 74, 0.8);
  }
}

/* Bantuan Box */
.faq-help-box {
  max-width: 840px;
  margin: 48px auto 0;
  padding: 24px 30px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(2, 132, 199, 0.03) 100%);
  border: 1px solid rgba(14, 165, 233, 0.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.help-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.help-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(14, 165, 233, 0.14);
  color: var(--primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.help-icon svg {
  width: 22px;
  height: 22px;
}

.help-content strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.98rem;
  color: var(--heading);
  margin-bottom: 2px;
}

.help-content p {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
  line-height: 1.45;
}

.faq-contact-btn {
  flex-shrink: 0;
  padding: 10px 22px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 64px 0;
  }
  .faq-trigger {
    padding: 18px 20px;
  }
  .faq-q-text {
    font-size: 1rem;
  }
  .faq-answer-text {
    padding: 14px 20px 20px;
  }
  .faq-help-box {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px;
  }
  .faq-contact-btn {
    width: 100%;
  }
}
</style>
