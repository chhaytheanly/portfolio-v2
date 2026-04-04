export function useScrollAnimation() {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    if (target.value) {
      observer.observe(target.value)
    }

    onUnmounted(() => observer.disconnect())
  })

  return { target, isVisible }
}
