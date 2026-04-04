<template>
  <div
    v-if="isVisible"
    class="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none"
  >
    <div
      class="h-full bg-gradient-to-r from-[var(--color-accent)] to-purple-500 transition-all duration-150 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    />
  </div>
</template>

<script setup lang="ts">
const scrollProgress = ref(0)
const isVisible = ref(false)

function handleScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  scrollProgress.value = progress
  isVisible.value = scrollTop > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
