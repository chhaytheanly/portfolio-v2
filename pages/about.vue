<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-12 text-center">
      {{ $t('about.pageTitle') }}
    </h1>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ScrollReveal class="md:col-span-1">
        <div
          class="aspect-square bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)] overflow-hidden flex items-center justify-center">
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
            <a href="/resume.pdf" class="btn-primary" download>
              {{ $t('about.downloadResume') }}
            </a>
            <NuxtLink :to="localePath('/contact')" class="btn-secondary">
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
              <div v-for="skill in skills" :key="skill.name" class="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl
         bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]
         hover:border-[var(--color-accent)]/40
         hover:bg-[var(--color-accent-light)]
         transition-all duration-300 cursor-default
         hover:-translate-y-1 hover:shadow-lg">
                <Icon :icon="skill.icon" class="text-3xl transition-transform duration-300 group-hover:scale-110" />

                <span class="text-sm font-medium text-center
               group-hover:text-[var(--color-accent)]
               transition-colors duration-300">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </BaseCard>
        </ScrollReveal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
  { name: 'Python', icon: 'logos:python' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'C/C++', icon: 'logos:c-plusplus' },
  { name: 'Rust', icon: 'logos:rust' },
  { name: 'Pytorch', icon: 'logos:pytorch' },
  { name: 'React', icon: 'logos:react' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'MySQL', icon: 'logos:mysql' },
  { name: 'Linux', icon: 'logos:linux-tux' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'CI/CD', icon: 'mdi:infinity' },
]
</script>

<style scoped>
.skill-tag:hover {
  box-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.2);
}
</style>