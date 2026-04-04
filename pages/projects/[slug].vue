<template>
  <article
    v-if="project"
    class="container-custom section-padding max-w-4xl mx-auto"
  >
    <NuxtLink
      :to="localePath('/projects')"
      class="back-link group inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all duration-300 mb-8"
    >
      <svg
        class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span class="text-sm font-medium">{{ $t('projects.backToProjects') }}</span>
    </NuxtLink>

    <header class="mb-10">
      <div class="aspect-video bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)] overflow-hidden mb-6 border border-[var(--color-border)]">
        <NuxtImg
          v-if="project.thumbnail"
          :src="project.thumbnail"
          :alt="project.title"
          class="w-full h-full object-cover"
          width="1200"
          height="680"
        />
      </div>
      <h1 class="heading-lg mb-4">
        {{ project.title }}
      </h1>
      <p class="body-lg text-[var(--color-text-secondary)] mb-6">
        {{ project.longDescription }}
      </p>
      <div class="flex flex-wrap gap-2 mb-6">
        <BaseBadge
          v-for="tech in project.tech"
          :key="tech"
          variant="accent"
        >
          {{ tech }}
        </BaseBadge>
      </div>
      <div class="flex gap-4">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          class="btn-primary text-sm group"
          target="_blank"
          rel="noopener"
        >
          {{ $t('projects.liveDemo') }}
          <svg
            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          class="btn-secondary text-sm group"
          target="_blank"
          rel="noopener"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          ><path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          /></svg>
          GitHub
          <svg
            class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </header>

    <ContentRenderer
      v-if="project"
      :value="project"
      class="prose prose-lg max-w-none"
    />
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()
const route = useRoute()

const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, async () => {
  const item = await queryCollection('projects').where('slug', '=', slug).first()
  return item
})

useSeoMeta({
  title: () => `${project.value?.title ?? 'Project'} — Portfolio`,
  description: () => project.value?.description ?? '',
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
