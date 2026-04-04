<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-12 text-center">
      {{ $t('about.pageTitle') }}
    </h1>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ScrollReveal class="md:col-span-1">
        <div class="aspect-square bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)] overflow-hidden flex items-center justify-center">
          <div class="text-6xl font-bold text-[var(--color-text-tertiary)]">
            YN
          </div>
        </div>
      </ScrollReveal>

      <div class="md:col-span-2 space-y-6">
        <ScrollReveal :delay="100">
          <BaseCard class="p-6">
            <p class="body-lg mb-4">
              {{ $t('about.bio1') }}
            </p>
            <p class="body-md">
              {{ $t('about.bio2') }}
            </p>
          </BaseCard>
        </ScrollReveal>

        <ScrollReveal :delay="200">
          <div class="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              class="btn-primary"
              download
            >
              {{ $t('about.downloadResume') }}
            </a>
            <NuxtLink
              :to="localePath('/contact')"
              class="btn-secondary"
            >
              {{ $t('contact.pageTitle') }}
            </NuxtLink>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="300">
          <BaseCard class="p-6">
            <h3 class="heading-sm mb-4">
              {{ $t('about.skills') }}
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div
                v-for="skill in skills"
                :key="skill"
                class="skill-tag flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent-light)] transition-all duration-300 cursor-default group"
              >
                <div class="w-2 h-2 rounded-full bg-[var(--color-accent)] group-hover:scale-125 transition-transform duration-300" />
                <span class="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors duration-300">{{ skill }}</span>
              </div>
            </div>
          </BaseCard>
        </ScrollReveal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `${t('about.pageTitle')} — ${t('hero.title')}`,
  description: () => t('about.bio1'),
})

const skills = [
  'TypeScript', 'Vue 3', 'Nuxt 3', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Figma',
  'Git', 'CI/CD',
]
</script>
