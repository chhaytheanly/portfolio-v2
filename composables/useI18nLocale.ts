export function useI18nLocale() {
  const { locale, locales, setLocale, t } = useI18n()

  const localeProperties = computed(() => {
    return locales.value.find((l: { code: string }) => l.code === locale.value)
  })

  const switchLocale = (code: 'en' | 'fr' | 'km') => {
    setLocale(code)
  }

  return {
    locale,
    locales,
    localeProperties,
    switchLocale,
    t,
  }
}
