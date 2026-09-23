<script setup lang="ts">
import { ref } from 'vue'
import { useAccessControl } from '../composables/useAccessControl'

const { handleNavClick } = useAccessControl()

const emailNewsletter = ref('')
const newsletterSent = ref(false)

const handleNewsletter = () => {
  if (!emailNewsletter.value) return
  newsletterSent.value = true
  setTimeout(() => {
    emailNewsletter.value = ''
    newsletterSent.value = false
  }, 4000)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Brand Column -->
        <div class="footer-brand-col">
          <a href="#beranda" class="footer-brand">
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

          <p class="footer-desc">
            PT Solusi Digital Nusantara — Mitra rekayasa teknologi dan transformasi digital terpercaya bagi bisnis modern di Indonesia dan Asia Tenggara.
          </p>

          <div class="footer-socials">
            <!-- LinkedIn -->
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.89-.73-1.62-1.63-1.62Z" />
              </svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <!-- Twitter / X -->
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="X Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-links-col">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang" @click="(e) => handleNavClick(e, '#tentang')">Tentang Kami</a></li>
            <li><a href="#visi-misi" @click="(e) => handleNavClick(e, '#visi-misi')">Visi &amp; Misi</a></li>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Layanan Perusahaan</a></li>
            <li><a href="#kontak" @click="(e) => handleNavClick(e, '#kontak')">Hubungi Kami</a></li>
          </ul>
        </div>

        <!-- Services Links -->
        <div class="footer-links-col">
          <h4>Layanan Utama</h4>
          <ul>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Web &amp; SaaS Platform</a></li>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Aplikasi Mobile iOS/Android</a></li>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Cloud Architecture &amp; DevOps</a></li>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Kecerdasan Buatan (AI)</a></li>
            <li><a href="#layanan" @click="(e) => handleNavClick(e, '#layanan')">Keamanan Siber &amp; Audit TI</a></li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="footer-news-col">
          <h4>Wawasan Teknologi</h4>
          <p>Dapatkan pembaruan tren teknologi enterprise dan artikel inovasi digital secara berkala.</p>
          
          <form class="newsletter-form" @submit.prevent="handleNewsletter">
            <div class="news-input-wrap">
              <input
                v-model="emailNewsletter"
                type="email"
                required
                placeholder="Masukkan email Anda..."
              />
              <button type="submit" class="news-btn" aria-label="Langganan newsletter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            <span v-if="newsletterSent" class="news-feedback">
              ✓ Terima kasih! Anda telah terdaftar.
            </span>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2026 PT Solusi Digital Nusantara (Nusantara Tech). Seluruh hak cipta dilindungi undang-undang.
        </p>

        <div class="footer-bottom-actions">
          <div class="legal-links">
            <a href="#beranda">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#beranda">Syarat &amp; Ketentuan</a>
          </div>

          <button type="button" class="back-to-top" title="Kembali ke atas" @click="scrollToTop">
            <span>Ke Atas</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #080f1a;
  color: #94a3b8;
  padding: 80px 0 36px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
  gap: clamp(32px, 4vw, 56px);
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 18px;
}

.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--primary-deep));
  color: #fff;
  display: grid;
  place-items: center;
}

.brand-icon svg {
  width: 20px;
  height: 20px;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: #f8fafc;
}

.brand-name span {
  color: var(--primary);
}

.footer-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 360px;
  margin-bottom: 24px;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  place-items: center;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.social-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

/* Links Columns */
.footer-links-col h4,
.footer-news-col h4 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0 0 20px;
}

.footer-links-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links-col a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-links-col a:hover {
  color: var(--secondary);
}

/* Newsletter Column */
.footer-news-col p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 18px;
}

.news-input-wrap {
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 4px 6px 4px 16px;
  transition: border-color 0.25s;
}

.news-input-wrap:focus-within {
  border-color: var(--primary);
}

.news-input-wrap input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.88rem;
  outline: none;
  flex-grow: 1;
  min-width: 0;
}

.news-input-wrap input::placeholder {
  color: #64748b;
}

.news-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition: background 0.2s, transform 0.2s;
}

.news-btn svg {
  width: 16px;
  height: 16px;
}

.news-btn:hover {
  background: var(--primary-deep);
  transform: scale(1.05);
}

.news-feedback {
  display: block;
  margin-top: 8px;
  font-size: 0.8rem;
  color: #10b981;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  gap: 20px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 0.84rem;
  color: #64748b;
}

.footer-bottom-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.84rem;
}

.legal-links a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s;
}

.legal-links a:hover {
  color: #cbd5e1;
}

.legal-links span {
  color: #475569;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.back-to-top svg {
  width: 14px;
  height: 14px;
}

.back-to-top:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-bottom-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
