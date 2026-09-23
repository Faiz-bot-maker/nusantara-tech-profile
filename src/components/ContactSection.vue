<script setup lang="ts">
import { ref, watch } from 'vue'
import { useReveal } from '../composables/useReveal'
import { useAccessControl } from '../composables/useAccessControl'

const { bind } = useReveal()
const { selectedService } = useAccessControl()

const serviceOptions = [
  'Pengembangan Web & Aplikasi Kustom',
  'Pengembangan Aplikasi Mobile (iOS & Android)',
  'Infrastruktur Cloud & DevOps Modern',
  'Kecerdasan Buatan (AI) & Analitika Data',
  'Desain UI/UX & Strategi Produk Digital',
  'Keamanan Siber & Audit Infrastruktur TI',
  'Konsultasi Transformasi Digital Umum',
]

const form = ref({
  fullName: '',
  companyEmail: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
})

// Auto-select service when requested from ServicesSection
watch(
  selectedService,
  (newVal) => {
    if (newVal) {
      form.value.service = newVal
    }
  },
  { immediate: true },
)

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const copySuccess = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('halo@nusantaratech.id')
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2500)
  } catch {
    // Fallback if clipboard API blocked
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2500)
  }
}

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 1200)
}

const resetForm = () => {
  form.value = {
    fullName: '',
    companyEmail: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  }
  isSubmitted.value = false
}
</script>

<template>
  <section id="kontak" class="contact">
    <div class="container">
      <div class="contact-head reveal" :ref="bind">
        <span class="section-eyebrow">Hubungi Kami</span>
        <h2 class="section-title">Mari Wujudkan Solusi Digital<br />Masa Depan Bersama Kami</h2>
        <p class="section-lead">
          Diskusikan visi, tantangan teknis, atau ide proyek Anda bersama tim ahli Nusantara Tech. Kami siap menyusun roadmap teknologi terbaik untuk bisnis Anda.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Left: Contact Details & Channels -->
        <div class="contact-info reveal" :ref="bind">
          <!-- Office Card -->
          <div class="info-card office-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3>Kantor Pusat</h3>
              <p>Cyber 2 Tower, Lantai 18<br />Jl. H.R. Rasuna Said Blok X-5, Kuningan<br />Jakarta Selatan, DKI Jakarta 12950</p>
            </div>
          </div>

          <!-- Fast Contact Channels -->
          <div class="channel-list">
            <!-- WhatsApp -->
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Tech,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20solusi%20teknologi."
              target="_blank"
              rel="noopener noreferrer"
              class="channel-item wa-channel"
            >
              <div class="channel-icon-wrap wa-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
                </svg>
              </div>
              <div class="channel-text">
                <span class="channel-label">WhatsApp Konsultasi</span>
                <strong class="channel-value">+62 812-3456-7890</strong>
              </div>
              <span class="online-tag">Online Sekarang</span>
            </a>

            <!-- Email -->
            <div class="channel-item email-channel">
              <div class="channel-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div class="channel-text">
                <span class="channel-label">Email Resmi</span>
                <strong class="channel-value">halo@nusantaratech.id</strong>
              </div>
              <button
                type="button"
                class="copy-btn"
                :title="copySuccess ? 'Tersalin ke clipboard' : 'Salin alamat email'"
                @click="copyEmail"
              >
                <span v-if="copySuccess">Tersalin!</span>
                <span v-else>Salin</span>
              </button>
            </div>

            <!-- Phone -->
            <div class="channel-item phone-channel">
              <div class="channel-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div class="channel-text">
                <span class="channel-label">Hotline Kantor</span>
                <strong class="channel-value">+62 (21) 5098-7700</strong>
              </div>
            </div>
          </div>

          <!-- Assurances -->
          <div class="assurances-box">
            <div class="assurance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Kerahasiaan ide &amp; data proyek terjamin penuh dengan NDA formal.</span>
            </div>
            <div class="assurance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Respon konsultasi strategis pertama dijamin dalam &lt; 24 jam kerja.</span>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Consultation Form -->
        <div class="contact-form-wrap reveal" :ref="bind">
          <!-- Success State -->
          <div v-if="isSubmitted" class="form-success-card">
            <div class="success-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Pesan Anda Berhasil Terkirim!</h3>
            <p>
              Terima kasih telah menghubungi Nusantara Tech. Konsultan teknologi kami akan meninjau kebutuhan proyek Anda dan menghubungi Anda melalui email atau WhatsApp dalam 1x24 jam kerja.
            </p>
            <button type="button" class="btn btn-secondary" @click="resetForm">
              Kirim Pesan Lainnya
            </button>
          </div>

          <!-- Active Form -->
          <form v-else class="consultation-form" @submit.prevent="handleSubmit">
            <div class="form-header">
              <h3>Formulir Konsultasi Proyek</h3>
              <p>Isi formulir berikut untuk mendapatkan proposal solusi &amp; estimasi awal secara gratis.</p>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="fullName">Nama Lengkap <span class="req">*</span></label>
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  required
                  placeholder="Misal: Budi Santoso"
                />
              </div>

              <div class="form-group">
                <label for="companyEmail">Email Perusahaan / Bisnis <span class="req">*</span></label>
                <input
                  id="companyEmail"
                  v-model="form.companyEmail"
                  type="email"
                  required
                  placeholder="budi@perusahaan.co.id"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">Nomor WhatsApp / HP <span class="req">*</span></label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="+62 812-xxxx-xxxx"
                />
              </div>

              <div class="form-group">
                <label for="service">Layanan yang Dibutuhkan</label>
                <select id="service" v-model="form.service">
                  <option value="" disabled>Pilih Layanan</option>
                  <option v-for="opt in serviceOptions" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="budget">Perkiraan Anggaran Investasi</label>
              <select id="budget" v-model="form.budget">
                <option value="" disabled>Pilih Rentang Anggaran (Opsional)</option>
                <option value="< 50 Juta">&lt; Rp 50 Juta</option>
                <option value="50 - 150 Juta">Rp 50 Juta - Rp 150 Juta</option>
                <option value="150 - 500 Juta">Rp 150 Juta - Rp 500 Juta</option>
                <option value="> 500 Juta">&gt; Rp 500 Juta (Enterprise Scale)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Ceritakan Kebutuhan atau Visi Proyek Anda <span class="req">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                placeholder="Jelaskan secara singkat fitur, tujuan bisnis, atau platform yang ingin dibangun..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="loading-spinner"></span>
              <span v-if="isSubmitting">Mengirimkan Informasi...</span>
              <span v-else>Kirim Permintaan Konsultasi</span>
              <svg v-if="!isSubmitting" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 96px 0;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--border);
}

.contact-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}

/* Left Column Info */
.info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px;
  box-shadow: var(--shadow);
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 24px;
  height: 24px;
}

.office-card h3 {
  margin: 0 0 6px;
  font-size: 1.15rem;
  color: var(--heading);
}

.office-card p {
  color: var(--text);
  font-size: 0.92rem;
  line-height: 1.6;
}

.channel-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 26px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 16px 20px;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;
}

.channel-item:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: var(--shadow);
}

.channel-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.channel-icon-wrap svg {
  width: 20px;
  height: 20px;
}

.wa-icon {
  background: rgba(37, 211, 102, 0.12);
  color: #25d366;
}

.channel-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
}

.channel-label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.channel-value {
  font-size: 0.98rem;
  color: var(--heading);
  font-family: var(--font-heading);
}

.online-tag {
  font-size: 0.72rem;
  font-weight: 700;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  padding: 4px 10px;
  border-radius: 999px;
}

.copy-btn {
  padding: 6px 14px;
  border-radius: 8px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary);
  border: 1px solid rgba(14, 165, 233, 0.2);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: var(--primary);
  color: #fff;
}

.assurances-box {
  background: rgba(14, 165, 233, 0.05);
  border: 1px solid rgba(14, 165, 233, 0.2);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.assurance-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.86rem;
  color: var(--text);
  line-height: 1.5;
}

.assurance-item svg {
  width: 20px;
  height: 20px;
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 1px;
}

/* Right Column Form */
.contact-form-wrap {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: clamp(28px, 4vw, 40px);
  box-shadow: var(--shadow);
}

.form-header {
  margin-bottom: 24px;
}

.form-header h3 {
  font-size: 1.35rem;
  color: var(--heading);
  margin: 0 0 6px;
}

.form-header p {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.5;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-family: var(--font-heading);
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--heading);
}

.req {
  color: var(--cta);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--heading);
  font-family: var(--font-body);
  font-size: 0.92rem;
  transition: all 0.25s ease;
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

.submit-btn {
  width: 100%;
  margin-top: 8px;
  font-size: 1rem;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success Card */
.form-success-card {
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.success-icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
}

.success-icon-wrap svg {
  width: 36px;
  height: 36px;
}

.form-success-card h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--heading);
}

.form-success-card p {
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 440px;
  margin-bottom: 28px;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
