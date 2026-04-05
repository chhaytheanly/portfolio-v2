<template>
  <div class="container-custom section-padding">
    <!-- Header Section -->
    <div class="max-w-3xl mx-auto text-center mb-14">
      <div
        class="inline-flex mb-4 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/60">
        <span class="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
          {{ tOr('projects.badge', 'Featured Work') }}
        </span>
      </div>
      <h1 class="heading-lg mb-3">
        {{ $t('projects.pageTitle') }}
      </h1>
      <p class="body-md text-[var(--color-text-secondary)] max-w-2xl mx-auto">
        {{ $t('projects.pageSubtitle') }}
      </p>
    </div>

    <!-- Category Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="px-5 py-2.5 rounded-full text-sm font-semibold relative overflow-hidden transition-all duration-300 border"
        :class="activeCategory === cat.value
          ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/25 border-[var(--color-accent)] scale-105'
          : 'bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/30 hover:shadow-md border-[var(--color-border)]/60'"
        @click="activeCategory = cat.value"
      >
        <span class="relative z-10">{{ cat.label }}</span>
      </button>
    </div>

    <!-- Projects Grid -->
    <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <ScrollReveal
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :delay="index * 100"
      >
        <NuxtLink
          :to="localePath(`/projects/${project.slug}`)"
          class="project-card group block h-full"
        >
          <div class="relative overflow-hidden rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-glass)]/60 backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
            <!-- Image Section -->
            <div class="relative aspect-video overflow-hidden flex-shrink-0">
              <NuxtImg
                v-if="project.thumbnail"
                :src="project.thumbnail"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width="600"
                height="340"
              />
              <div v-else class="w-full h-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)] flex items-center justify-center">
                <svg class="w-16 h-16 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              
              <!-- Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-4">
                <div class="flex gap-2">
                  <a
                    v-if="project.liveUrl"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                    @click.prevent.stop
                  >
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                    @click.prevent.stop
                  >
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
                <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <!-- Featured Badge -->
              <div v-if="project.featured" class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[var(--color-accent)]/90 backdrop-blur-sm text-white text-xs font-semibold shadow-lg">
                Featured
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5 flex flex-col flex-1">
              <!-- Title and Arrow -->
              <div class="flex items-start justify-between gap-2 mb-3">
                <h3 class="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 line-clamp-2">
                  {{ project.title }}
                </h3>
                <svg
                  class="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <!-- Description -->
              <p class="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 flex-1 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Date -->
              <div class="flex items-center gap-1.5 text-xs text-[var(--color-text-tertiary)] mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ formatDate(project.date) }}</span>
              </div>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech.slice(0, 4)"
                  :key="tech"
                  class="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-tertiary)]/80 text-[var(--color-text-secondary)] border border-[var(--color-border)]/50"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.tech.length > 4"
                  class="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-tertiary)]/50 text-[var(--color-text-tertiary)] border border-[var(--color-border)]/40"
                >
                  +{{ project.tech.length - 4 }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </ScrollReveal>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <svg class="w-20 h-20 mx-auto text-[var(--color-text-tertiary)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <p class="text-lg text-[var(--color-text-secondary)]">No projects found in this category</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

definePageMeta({
  layout: 'default',
})

const { t, te } = useI18n()
const localePath = useLocalePath()

function tOr(key: string, fallback: string): string {
  return te(key) ? t(key) : fallback
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

useSeoMeta({
  title: () => `${t('projects.pageTitle')} — ${t('hero.title')}`,
  description: () => t('projects.pageSubtitle'),
})

const activeCategory = ref('all')

const categories = computed(() => [
  { label: t('projects.all'), value: 'all' },
  { label: t('projects.machineLearning'), value: 'machine-learning' },
  { label: t('projects.engine'), value: 'engine' },
  { label: t('projects.fullstack'), value: 'fullstack' },
])

const { data: projects } = await useAsyncData<Project[]>('projects', async () => {
  const items = await queryCollection('projects').all()
  return items as unknown as Project[]
})

const filteredProjects = computed(() => {
  if (!projects.value) return []
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  animation: fadeInUp 0.6s ease-out forwards;
  will-change: transform;
}
</style>
