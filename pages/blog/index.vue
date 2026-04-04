<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-4 text-center">
      {{ $t('blog.pageTitle') }}
    </h1>
    <p class="body-md text-center mb-12">
      {{ $t('blog.pageSubtitle') }}
    </p>
    <div class="max-w-3xl mx-auto space-y-4">
      <ScrollReveal
        v-for="post in posts"
        :key="post.slug"
        :delay="100"
      >
        <NuxtLink
          :to="localePath(`/blog/${post.slug}`)"
          class="blog-card group glass-card p-6 block transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <time class="text-sm text-[var(--color-text-tertiary)]">{{ formatDate(post.date) }}</time>
                <span class="text-sm text-[var(--color-text-tertiary)]">·</span>
                <span class="text-sm text-[var(--color-text-tertiary)]">{{ post.readTime }} {{ $t('blog.minRead') }}</span>
              </div>
              <h3 class="heading-sm mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">{{ post.title }}</h3>
              <p class="body-md line-clamp-2">{{ post.description }}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <BaseBadge
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  variant="subtle"
                >
                  {{ tag }}
                </BaseBadge>
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                <svg
                  class="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-white transition-colors duration-300"
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
            </div>
          </div>
        </NuxtLink>
      </ScrollReveal>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => `${t('blog.pageTitle')} — ${t('hero.title')}`,
  description: () => t('blog.pageSubtitle'),
})

const { data: posts } = await useAsyncData<BlogPost[]>('blog-posts', async () => {
  const items = await queryCollection('blog').order('date', 'DESC').all()
  return items as unknown as BlogPost[]
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>
