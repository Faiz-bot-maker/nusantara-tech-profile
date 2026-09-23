import { ref } from 'vue'

const isUnlocked = ref(false)
const selectedService = ref('')
const noticeMessage = ref('')
const showNotice = ref(false)
let noticeTimer: ReturnType<typeof setTimeout> | null = null

export function useAccessControl() {
  const triggerNotice = (msg: string) => {
    noticeMessage.value = msg
    showNotice.value = true
    if (noticeTimer) clearTimeout(noticeTimer)
    noticeTimer = setTimeout(() => {
      showNotice.value = false
    }, 3800)
  }

  const unlock = (scrollTarget = '') => {
    if (!isUnlocked.value) {
      isUnlocked.value = true
      triggerNotice('Selamat datang! Seluruh profil dan layanan Nusantara Tech kini siap Anda jelajahi.')
    }
    if (scrollTarget) {
      setTimeout(() => {
        const el = document.querySelector(scrollTarget)
        el?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const lock = () => {
    isUnlocked.value = false
    triggerNotice('Tampilan kembali ke Beranda awal.')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleLock = () => {
    if (isUnlocked.value) {
      lock()
    } else {
      unlock()
    }
  }

  const handleNavClick = (e: MouseEvent, targetId: string) => {
    if (targetId === '#beranda') {
      return // Beranda is always accessible
    }

    if (!isUnlocked.value) {
      e.preventDefault()
      triggerNotice('Silakan tekan tombol "Mulai Berkolaborasi" di Beranda terlebih dahulu untuk mengakses menu ini.')
      
      // Pulse animation on the unlock button in Hero
      const ctaBtn = document.querySelector('.hero-unlock-btn') as HTMLElement | null
      if (ctaBtn) {
        ctaBtn.classList.remove('pulse-attention')
        void ctaBtn.offsetWidth // trigger reflow
        ctaBtn.classList.add('pulse-attention')
        ctaBtn.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return false
    }
    return true
  }

  const requestServiceConsultation = (serviceName: string) => {
    selectedService.value = serviceName
    unlock('#kontak')
  }

  return {
    isUnlocked,
    selectedService,
    noticeMessage,
    showNotice,
    unlock,
    lock,
    toggleLock,
    handleNavClick,
    triggerNotice,
    requestServiceConsultation,
  }
}
