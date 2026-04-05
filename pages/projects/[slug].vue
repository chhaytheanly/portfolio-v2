<template>
  <article v-if="project" class="container-custom section-padding max-w-4xl mx-auto">
    <NuxtLink :to="localePath('/projects')"
      class="back-link group inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all duration-300 mb-8">
      <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none"
        stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="text-sm font-medium">{{ $t('projects.backToProjects') || 'Back to Projects' }}</span>
    </NuxtLink>

    <header class="mb-10">
      <!-- Main Thumbnail -->
      <div
        class="aspect-video bg-[var(--color-bg-tertiary)] rounded-2xl overflow-hidden mb-8 border border-[var(--color-border)]/60 shadow-lg">
        <NuxtImg v-if="project.thumbnail" :src="project.thumbnail" :alt="project.title"
          class="w-full h-full object-cover" width="1200" height="680" loading="lazy" />
        <div v-else
          class="w-full h-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)] flex items-center justify-center">
          <svg class="w-24 h-24 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
      </div>

      <!-- Title -->
      <h1 class="heading-lg mb-4">
        {{ project.title }}
      </h1>

      <!-- Meta Info -->
      <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-[var(--color-text-secondary)]">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{{ formatDate(project.date) }}</span>
        </div>
        <div v-if="project.featured"
          class="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">
          <span class="text-xs font-semibold text-[var(--color-accent)]">Featured Project</span>
        </div>
        <div class="px-3 py-1 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]/60">
          <span class="text-xs font-medium text-[var(--color-text-secondary)]">{{ getCategoryLabel(project.category)
            }}</span>
        </div>
      </div>

      <!-- Description -->
      <p class="body-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        {{ project.longDescription }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="tech in project.tech" :key="tech"
          class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]/60">
          {{ tech }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-3">
        <a v-if="project.liveUrl" :href="project.liveUrl"
          class="btn-primary text-sm group inline-flex items-center gap-2" target="_blank" rel="noopener">
          <svg class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {{ tOr('projects.liveDemo', 'Live Demo') }}
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl"
          class="btn-secondary text-sm group inline-flex items-center gap-2" target="_blank" rel="noopener">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {{ tOr('projects.github', 'GitHub') }}
        </a>
      </div>
    </header>

    <!-- Markdown Content -->
    <ContentRenderer v-if="project" :value="project" class="prose prose-lg max-w-none" />
  </article>
  <div v-else class="text-center py-20">
    <svg class="w-20 h-20 mx-auto text-[var(--color-text-tertiary)] mb-4" fill="none" stroke="currentColor"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2 class="text-2xl font-bold mb-2">Project Not Found</h2>
    <p class="text-[var(--color-text-secondary)] mb-6">The project you're looking for doesn't exist.</p>
    <NuxtLink :to="localePath('/projects')" class="btn-primary inline-block">
      Back to Projects
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()
const route = useRoute()
const { t, te } = useI18n()

function tOr(key: string, fallback: string): string {
  return te(key) ? t(key) : fallback
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getCategoryLabel(category: string): string {
  const categoryMap: Record<string, string> = {
    'machine-learning': 'Machine Learning',
    'engine': 'Engine',
    'fullstack': 'Full-Stack',
    'frontend': 'Frontend',
    'backend': 'Backend',
  }
  return categoryMap[category] || category
}

const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, async () => {
  // Keep parity with blog-style lookup and add a path fallback.
  const bySlug = await queryCollection('projects').where('slug', '=', slug).first()
  if (bySlug) return bySlug
  return await queryCollection('projects').path(`/projects/${slug}`).first()
})

useSeoMeta({
  title: () => `${project.value?.title ?? 'Project'} — Portfolio`,
  description: () => project.value?.description ?? '',
  ogTitle: () => project.value?.title ?? '',
  ogDescription: () => project.value?.description ?? '',
  ogImage: () => project.value?.thumbnail ?? '',
})
</script>

<style scoped>
.back-link {
  position: relative;
}

.back-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width 0.3s ease;
}

.back-link:hover::after {
  width: 100%;
}
</style>
