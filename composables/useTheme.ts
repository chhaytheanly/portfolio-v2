import { useColorMode } from '@vueuse/core'

export function useTheme() {
  const mode = useColorMode({
    selector: 'html',
    attribute: 'class',
    emitAuto: true,
  })

  const isDark = computed(() => mode.value === 'dark')

  const toggleTheme = () => {
    mode.value = isDark.value ? 'light' : 'dark'
  }

  return {
    mode,
    isDark,
    toggleTheme,
  }
}
