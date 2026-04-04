export function useCardGlow() {
  function attachGlowEffect(selector: string) {
    if (typeof window === 'undefined') return

    const cards = document.querySelectorAll(selector)
    cards.forEach((card) => {
      const el = card as HTMLElement
      el.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent
        const rect = el.getBoundingClientRect()
        const x = ((me.clientX - rect.left) / rect.width) * 100
        const y = ((me.clientY - rect.top) / rect.height) * 100
        el.style.setProperty('--mouse-x', `${x}%`)
        el.style.setProperty('--mouse-y', `${y}%`)
      })
    })
  }

  onMounted(() => {
    attachGlowEffect('.project-card')
    attachGlowEffect('.blog-card')
  })

  watch(() => typeof window !== 'undefined' && window.location.pathname, () => {
    setTimeout(() => {
      attachGlowEffect('.project-card')
      attachGlowEffect('.blog-card')
    }, 100)
  })
}
