<template>
  <div class="min-h-screen flex flex-col items-center justify-center container-custom text-center">
    <h1 class="heading-xl mb-4">
      <span class="text-gradient">404</span>
    </h1>
    <p class="body-lg mb-8">
      {{ $t('notFound.description') }}
    </p>
    <NuxtLink
      :to="localePath('/')"
      class="btn-primary"
    >
      {{ $t('notFound.goHome') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('notFound.title'),
  description: () => t('notFound.description'),
})
</script>
