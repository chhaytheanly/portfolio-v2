<template>
  <div :class="localeClass" class="min-h-screen flex flex-col bg-[var(--color-bg-primary)]">
    <SkipLink />
    <ScrollProgress />
    <Navbar />
    <main id="main-content" class="flex-1 pt-16 sm:pt-20" tabindex="-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18nLocale()

const localeClass = computed(() => `locale-${locale.value}`)

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
  },
  bodyAttrs: {
    class: localeClass.value,
  },
}))

if (process.client) {
  watchEffect(() => {
    const currentClass = `locale-${locale.value}`
    const localeClasses = ['locale-en', 'locale-fr', 'locale-km']

    document.body.classList.remove(...localeClasses)
    document.body.classList.add(currentClass)
  })
}
</script>
