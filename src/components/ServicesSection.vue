<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReveal } from '../composables/useReveal'
import { useAccessControl } from '../composables/useAccessControl'

const { bind } = useReveal()
const { requestServiceConsultation } = useAccessControl()

type Category = 'all' | 'software' | 'cloud' | 'ai' | 'design_security'

const activeCategory = ref<Category>('all')

const categories = [
  { id: 'all', label: 'Semua Solusi' },
  { id: 'software', label: 'Rekayasa Software' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'ai', label: 'Data & Kecerdasan Buatan' },
  { id: 'design_security', label: 'Desain & Keamanan' },
]

interface Service {
  id: string
  title: string
  category: Category
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  accentColor: string
  icon: string
}

const services: Service[] = [
  {
    id: 'web-apps',
    title: 'Pengembangan Web & Aplikasi Kustom',
    category: 'software',
    tagline: 'Enterprise Web & Scalable SaaS',
    description:
      'Membangun aplikasi web mutakhir berskala besar dengan arsitektur microservices modular, kecepatan akses luar biasa, dan fondasi kode yang siap bertumbuh.',
    features: [
      'Arsitektur Microservices & Modular API',
      'Progressive Web App (PWA) berkecepatan tinggi',
      'Integrasi Payment Gateway & Logistik Lokal',
      'Dashboard Admin & Analitika Real-time',
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'Golang', 'PostgreSQL'],
    accentColor: '#0ea5e9',
    icon: 'M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z',
  },
  {
    id: 'mobile-dev',
    title: 'Pengembangan Aplikasi Mobile (iOS & Android)',
    category: 'software',
    tagline: 'Native & Cross-Platform Experience',
    description:
      'Menghadirkan aplikasi seluler berkualitas tinggi dengan animasi halus 60fps, kompatibilitas perangkat luas, dan fungsionalitas offline-first.',
    features: [
      'Multiplatform Flutter & React Native efisien',
      'Optimasi konsumsi daya baterai & memori',
      'Push notification & in-app engagement analytics',
      'Integrasi autentikasi biometrik & keamanan data',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    accentColor: '#38bdf8',
    icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
  },
  {
    id: 'cloud-devops',
    title: 'Infrastruktur Cloud & DevOps Modern',
    category: 'cloud',
    tagline: 'High Availability & Automated Delivery',
    description:
      'Transformasi infrastruktur server menuju ekosistem cloud otomatis bergaransi uptime 99.99%, auto-scaling elastis, serta pipeline CI/CD tanpa jeda.',
    features: [
      'Otomatisasi deployment CI/CD tanpa downtime',
      'Orkestrasi kontainer dengan Kubernetes & Docker',
      'Infrastruktur as Code (IaC) terstandar',
      'Monitoring 24/7 dan mitigasi anomali otomatis',
    ],
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    accentColor: '#0284c7',
    icon: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z',
  },
  {
    id: 'ai-analytics',
    title: 'Kecerdasan Buatan (AI) & Analitika Data',
    category: 'ai',
    tagline: 'Data-Driven Insights & Intelligent Automation',
    description:
      'Mengolah data operasional bisnis menjadi wawasan strategis menggunakan machine learning, agen AI berbasis LLM, serta analitika prediktif akurat.',
    features: [
      'Agen AI kustom & asisten pintar operasional',
      'Dashboard Business Intelligence real-time',
      'Pemodelan prediksi churn & peramalan pasar',
      'Pipeline ETL data bervolume tinggi',
    ],
    technologies: ['Python', 'PyTorch', 'BigQuery', 'LangChain', 'OpenAI'],
    accentColor: '#f97316',
    icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
  },
  {
    id: 'ui-ux-design',
    title: 'Desain UI/UX & Strategi Produk Digital',
    category: 'design_security',
    tagline: 'Human-Centered & Conversion-Focused Design',
    description:
      'Merancang antarmuka produk yang memikat, intuitif, dan ramah pengguna melalui riset mendalam, sistem desain terpadu, dan pengujian kegunaan nyata.',
    features: [
      'Riset persona & perjalanan pengguna (User Journey)',
      'Design System terpadu dengan token desain siap pakai',
      'Prototipe interaktif high-fidelity',
      'Audit pengalaman pengguna & optimasi konversi',
    ],
    technologies: ['Figma', 'Tokens Studio', 'Design Tokens', 'Maze', 'Protopie'],
    accentColor: '#0ea5e9',
    icon: 'M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.39m3.42 3.415a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.416a6.776 6.776 0 0 0-3.42-3.416',
  },
  {
    id: 'cyber-security',
    title: 'Keamanan Siber & Audit Infrastruktur TI',
    category: 'design_security',
    tagline: 'End-to-End Cyber Defense & Data Compliance',
    description:
      'Melindungi ekosistem digital perusahaan dari potensi ancaman siber dengan uji penetrasi berkala, enkripsi berstandar perbankan, dan kesiapan regulasi PDP.',
    features: [
      'Uji Penetrasi Aplikasi Web & Mobile (Pentest)',
      'Audit Kepatuhan Regulasi Perlindungan Data Pribadi (UU PDP)',
      'Arsitektur Zero-Trust & Enkripsi Data Multi-layer',
      'Pelatihan kesadaran keamanan siber bagi tim internal',
    ],
    technologies: ['OWASP', 'Kali Linux', 'TLS 1.3', 'Zero-Trust', 'ISO 27001'],
    accentColor: '#ea580c',
    icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  },
]

const filteredServices = computed(() => {
  if (activeCategory.value === 'all') return services
  return services.filter((s) => s.category === activeCategory.value)
})
</script>

<template>
  <section id="layanan" class="services">
    <div class="container">
      <!-- Section Header -->
      <div class="services-head reveal" :ref="bind">
        <span class="section-eyebrow">Layanan Perusahaan</span>
        <h2 class="section-title">Solusi Teknologi Terpadu<br />Skala Enterprise</h2>
        <p class="section-lead">
          Dari perancangan arsitektur hingga eksekusi rekayasa kode, kami mendampingi setiap fase inovasi digital Anda dengan standar kualitas kelas dunia.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="category-filters reveal" :ref="bind" role="tablist" aria-label="Filter Kategori Layanan">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="filter-btn"
          :class="{ 'is-active': activeCategory === cat.id }"
          role="tab"
          :aria-selected="activeCategory === cat.id"
          @click="activeCategory = cat.id as Category"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <article
          v-for="service in filteredServices"
          :key="service.id"
          class="service-card reveal"
          :ref="bind"
        >
          <div class="card-top">
            <div class="service-icon" :style="{ color: service.accentColor }">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path :d="service.icon" />
              </svg>
            </div>
            <span class="service-tagline">{{ service.tagline }}</span>
          </div>

          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>

          <!-- Feature Highlights -->
          <ul class="service-features">
            <li v-for="feat in service.features" :key="feat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="feature-check">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <!-- Tech Badges -->
          <div class="service-techs">
            <span v-for="tech in service.technologies" :key="tech" class="tech-pill">
              {{ tech }}
            </span>
          </div>

          <!-- Action Button -->
          <div class="card-footer">
            <button
              type="button"
              class="service-action-btn"
              @click="requestServiceConsultation(service.title)"
            >
              <span>Konsultasikan Layanan Ini</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Trust Metrics Bar -->
      <div class="services-metrics reveal" :ref="bind">
        <div class="metric-item">
          <span class="metric-num">99.9%</span>
          <span class="metric-lbl">Target Uptime Sistem &amp; Layanan Cloud</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-num">3x - 10x</span>
          <span class="metric-lbl">Akselerasi Time-to-Market Produk Digital</span>
        </div>
        <div class="metric-divider"></div>
        <div class="metric-item">
          <span class="metric-num">100%</span>
          <span class="metric-lbl">Kepatuhan Standar Keamanan &amp; Kerahasiaan (NDA)</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 96px 0;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  position: relative;
}

.services-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 40px;
}

/* Category Filters */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  border-color: var(--primary);
  color: var(--heading);
  transform: translateY(-1px);
}

.filter-btn.is-active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  box-shadow: 0 6px 18px -4px rgba(14, 165, 233, 0.45);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -18px rgba(14, 165, 233, 0.28);
  border-color: rgba(14, 165, 233, 0.4);
}

.service-card:hover::before {
  opacity: 1;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.2);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.08) rotate(-4deg);
}

.service-icon svg {
  width: 28px;
  height: 28px;
}

.service-tagline {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-align: right;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--heading);
  margin: 0 0 10px;
  line-height: 1.35;
}

.service-desc {
  color: var(--text);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 22px;
}

/* Feature bullet list */
.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--text);
  line-height: 1.45;
}

.feature-check {
  width: 16px;
  height: 16px;
  color: var(--cta);
  flex-shrink: 0;
  margin-top: 3px;
}

/* Tech Badges */
.service-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  margin-bottom: 24px;
}

.tech-pill {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--heading);
  background: rgba(14, 165, 233, 0.08);
  border: 1px solid rgba(14, 165, 233, 0.18);
  padding: 3px 10px;
  border-radius: 6px;
}

/* Card Action */
.card-footer {
  border-top: 1px solid var(--border);
  padding-top: 18px;
}

.service-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  border-radius: 12px;
  background: rgba(14, 165, 233, 0.08);
  border: 1px solid rgba(14, 165, 233, 0.2);
  color: var(--primary-deep);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.service-action-btn svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.service-action-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.service-action-btn:hover svg {
  transform: translateX(4px);
}

/* Trust Metrics Bar */
.services-metrics {
  margin-top: 64px;
  padding: 32px 40px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(2, 132, 199, 0.04) 100%);
  border: 1px solid rgba(14, 165, 233, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}

.metric-num {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--primary), var(--primary-deep));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.metric-lbl {
  font-size: 0.88rem;
  color: var(--muted);
  max-width: 240px;
  line-height: 1.4;
}

.metric-divider {
  width: 1px;
  height: 52px;
  background: var(--border);
}

@media (max-width: 1080px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services {
    padding: 64px 0;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .services-metrics {
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
  .metric-divider {
    width: 80%;
    height: 1px;
  }
}
</style>
