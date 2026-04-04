export default defineNuxtPlugin(() => {
  const html = document.documentElement
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  let isInternalClassUpdate = false

  const normalizeClassList = (value: string) =>
    value
      .replace(/\btheme-transitioning\b/g, '')
      .replace(/\s+/g, ' ')
      .trim()

  const applyTransitionClass = () => {
    isInternalClassUpdate = true
    html.classList.add('theme-transitioning')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      html.classList.remove('theme-transitioning')
      isInternalClassUpdate = false
    }, 400)
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName !== 'class' || isInternalClassUpdate)
        continue

      const previous = normalizeClassList(mutation.oldValue ?? '')
      const current = normalizeClassList(html.className)

      if (previous !== current)
        applyTransitionClass()
    }
  })

  observer.observe(html, {
    attributes: true,
    attributeFilter: ['class'],
    attributeOldValue: true,
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      observer.disconnect()
      clearTimeout(timeoutId)
    })
  }
})
