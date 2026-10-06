import { ref } from 'vue'

type ThemeMode = 'dark' | 'light'

function systemPrefersDark() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

let stored: ThemeMode | null = null
try {
  stored = localStorage.getItem('nt-theme') as ThemeMode | null
} catch {
  stored = null
}

const theme = ref<ThemeMode>(stored ?? (systemPrefersDark() ? 'dark' : 'light'))

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  if (mode === 'dark') {
    root.dataset.theme = 'dark'
  } else {
    root.dataset.theme = 'light'
  }
}

applyTheme(theme.value)

export function useThemeMode() {
  const toggleTheme = () => {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    theme.value = next
    applyTheme(next)
    try {
      localStorage.setItem('nt-theme', next)
    } catch {
      /* abaikan jika penyimpanan tidak tersedia */
    }
  }

  return { theme, toggleTheme }
}