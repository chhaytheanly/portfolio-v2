<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-4 text-center">
      {{ $t('projects.pageTitle') }}
    </h1>
    <p class="body-md text-center mb-8">
      {{ $t('projects.pageSubtitle') }}
    </p>

    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="category-btn px-4 py-2 rounded-full text-sm font-medium relative overflow-hidden transition-all duration-300"
        :class="activeCategory === cat.value
          ? 'bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent)]/20'
          : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)]/20 border border-transparent'"
        @click="activeCategory = cat.value"
      >
        {{ cat.label }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <NuxtLink
        v-for="project in filteredProjects"
        :key="project.slug"
        :to="localePath(`/projects/${project.slug}`)"
        class="project-card group block h-full"
      >
        <div class="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-glass)] backdrop-blur-xl transition-all duration-300 group-hover:border-[var(--color-accent)]/30 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
          <div class="aspect-video overflow-hidden flex-shrink-0">
            <NuxtImg
              v-if="project.thumbnail"
              :src="project.thumbnail"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width="600"
              height="340"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div class="absolute bottom-4 right-4 translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="heading-sm group-hover:text-[var(--color-accent)] transition-colors duration-300">{{ project.title }}</h3>
              <svg
                class="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <p class="body-md mb-4 line-clamp-2 flex-1">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <BaseBadge
                v-for="tech in project.tech"
                :key="tech"
                variant="subtle"
              >
                {{ tech }}
              </BaseBadge>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `${t('projects.pageTitle')} — ${t('hero.title')}`,
  description: () => t('projects.pageSubtitle'),
})

const activeCategory = ref('all')

const categories = computed(() => [
  { label: t('projects.all'), value: 'all' },
  { label: t('projects.fullstack'), value: 'fullstack' },
  { label: t('projects.frontend'), value: 'frontend' },
  { label: t('projects.mobile'), value: 'mobile' },
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
