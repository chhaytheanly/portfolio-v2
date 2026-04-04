<template>
  <article
    v-if="post"
    class="container-custom section-padding max-w-3xl mx-auto"
  >
    <NuxtLink
      :to="localePath('/blog')"
      class="text-[var(--color-accent)] text-sm font-medium mb-8 inline-flex items-center gap-1 hover:underline"
    >
      ← {{ $t('blog.backToPosts') }}
    </NuxtLink>

    <header class="mb-10">
      <div class="flex items-center gap-3 mb-4">
        <time class="text-sm text-[var(--color-text-tertiary)]">{{ formatDate(post.date) }}</time>
        <span class="text-sm text-[var(--color-text-tertiary)]">·</span>
        <span class="text-sm text-[var(--color-text-tertiary)]">{{ post.readTime }} {{ $t('blog.minRead') }}</span>
      </div>
      <h1 class="heading-lg mb-4">
        {{ post.title }}
      </h1>
      <p class="body-lg text-[var(--color-text-secondary)]">
        {{ post.description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <BaseBadge
          v-for="tag in post.tags"
          :key="tag"
          variant="subtle"
        >
          {{ tag }}
        </BaseBadge>
      </div>
    </header>

    <ContentRenderer
      v-if="post"
      :value="post"
      class="prose prose-lg max-w-none"
    />

    <nav class="mt-16 pt-8 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-6">
      <NuxtLink
        v-if="prevPost"
        :to="localePath(`/blog/${prevPost.slug}`)"
        class="group"
      >
        <span class="text-xs text-[var(--color-text-tertiary)]">{{ $t('blog.previous') }}</span>
        <p class="font-medium group-hover:text-[var(--color-accent)] transition-colors">{{ prevPost.title }}</p>
      </NuxtLink>
      <div v-else />
      <NuxtLink
        v-if="nextPost"
        :to="localePath(`/blog/${nextPost.slug}`)"
        class="group text-right sm:col-start-2"
      >
        <span class="text-xs text-[var(--color-text-tertiary)]">{{ $t('blog.next') }}</span>
        <p class="font-medium group-hover:text-[var(--color-accent)] transition-colors">{{ nextPost.title }}</p>
      </NuxtLink>
      <div v-else />
    </nav>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()
const route = useRoute()

const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, async () => {
  const item = await queryCollection('blog').where('slug', '=', slug).first()
  return item
})

const { data: allPosts } = await useAsyncData('blog-nav', async () => {
  const items = await queryCollection('blog').order('date', 'DESC').all()
  return items
})

const currentIndex = computed(() => {
  if (!allPosts.value || !post.value) return -1
  return allPosts.value.findIndex(p => p.slug === post.value!.slug)
})

const prevPost = computed(() => {
  if (currentIndex.value > 0) return allPosts.value?.[currentIndex.value - 1]
  return null
})

const nextPost = computed(() => {
  if (currentIndex.value < (allPosts.value?.length ?? 0) - 1) return allPosts.value?.[currentIndex.value + 1]
  return null
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useSeoMeta({
  title: () => `${post.value?.title ?? 'Blog'} — Portfolio`,
  description: () => post.value?.description ?? '',
})
</script>
