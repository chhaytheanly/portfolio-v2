<template>
  <div class="relative">
    <section
      class="min-h-[90vh] flex flex-col items-center justify-center container-custom text-center relative overflow-hidden">
      <!-- Subtle background decoration -->
      <DigitalBackground />

      <div class="relative z-10">
        <div v-motion="'fade-in'"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 mb-6">
          <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span class="text-sm font-medium text-[var(--color-accent)]">{{ $t('hero.available') || 'Available for work'
          }}</span>
        </div>
        <p v-motion="'fade-in'" :style="{ transitionDelay: '50ms' }"
          class="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-4 font-medium">
          {{ $t('hero.greeting') }}
        </p>
        <h1 v-motion="'fade-in-up'" class="heading-xl mb-6">
          <span class="text-gradient-primary">{{ $t('hero.title') }}</span>
        </h1>
        <p v-motion="'fade-in-up'" :style="{ transitionDelay: '100ms' }" class="body-lg max-w-2xl mx-auto mb-10">
          {{ $t('hero.subtitle') }}
        </p>
        <div v-motion="'fade-in-up'" :style="{ transitionDelay: '200ms' }" class="flex flex-wrap gap-4 justify-center">
          <NuxtLink :to="localePath('/projects')" class="btn-primary group">
            {{ $t('hero.ctaProjects') }}
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn-secondary group">
            {{ $t('hero.ctaContact') }}
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </NuxtLink>
        </div>

        <div v-motion="'fade-in'" :style="{ transitionDelay: '400ms' }"
          class="flex items-center justify-center gap-8 mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-link-enhanced group">
            <div class="icon-bg" />
            <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link-enhanced group">
            <div class="icon-bg" />
            <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link-enhanced group">
            <div class="icon-bg" />
            <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="absolute bottom-8 animate-bounce">
        <svg class="w-6 h-6 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <SectionWrapper :title="$t('about.pageTitle')" :subtitle="$t('about.bio1')" variant="alternate">
      <ScrollReveal>
        <div class="max-w-3xl mx-auto">
          <BaseCard class="p-8">
            <p class="body-md mb-6">
              {{ $t('about.bio2') }}
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="/resume.pdf" class="btn-primary text-sm" download>
                {{ $t('about.downloadResume') }}
              </a>
              <NuxtLink :to="localePath('/contact')" class="btn-secondary text-sm">
                {{ $t('contact.pageTitle') }}
              </NuxtLink>
            </div>
          </BaseCard>
        </div>
      </ScrollReveal>
    </SectionWrapper>

    <SectionWrapper :title="$t('projects.pageTitle')" :subtitle="$t('projects.pageSubtitle')">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ScrollReveal v-for="(project, i) in projects" :key="project.slug" :delay="(i % 3) * 100">
          <NuxtLink :to="localePath(`/project/${project.slug}`)" class="project-card group block h-full">
            <div
              class="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-glass)] backdrop-blur-xl transition-all duration-300 group-hover:border-[var(--color-accent)]/30 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
              <div class="aspect-video overflow-hidden flex-shrink-0 relative">
                <img v-if="project.thumbnail" :src="imageBase(project.thumbnail)" :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" width="600" height="340" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  class="absolute bottom-4 right-4 translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-start justify-between gap-2 mb-2">
                  <h3 class="heading-sm group-hover:text-[var(--color-accent)] transition-colors duration-300">{{
                    project.title }}</h3>
                  <svg
                    class="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p class="body-md mb-4 line-clamp-2 flex-1">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <BaseBadge v-for="tech in project.tech.slice(0, 3)" :key="tech" variant="subtle">
                    {{ tech }}
                  </BaseBadge>
                  <span v-if="project.tech.length > 3"
                    class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-[var(--color-text-tertiary)] bg-[var(--color-bg-tertiary)]">
                    +{{ project.tech.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </ScrollReveal>
      </div>
      <div class="text-center mt-10">
        <NuxtLink :to="localePath('/projects')" class="btn-primary group">
          {{ $t('projects.viewAll') }}
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </SectionWrapper>

    <SectionWrapper :title="$t('blog.pageTitle')" :subtitle="$t('blog.pageSubtitle')" variant="alternate">
      <div class="max-w-4xl mx-auto space-y-4">
        <ScrollReveal v-for="(post, i) in posts" :key="post.slug" :delay="i * 100">
          <NuxtLink :to="localePath(`/blog/${post.slug}`)"
            class="blog-card group block p-6 transition-all duration-500">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <time class="text-sm text-[var(--color-text-tertiary)]">{{ formatDate(post.date) }}</time>
                  <span class="text-sm text-[var(--color-text-tertiary)]">·</span>
                  <span class="text-sm text-[var(--color-text-tertiary)]">{{ post.readTime }} {{ $t('blog.minRead')
                  }}</span>
                </div>
                <h3 class="heading-sm mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">{{
                  post.title }}</h3>
                <p class="body-md line-clamp-2">{{ post.description }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <BaseBadge v-for="tag in post.tags.slice(0, 3)" :key="tag" variant="subtle">
                    {{ tag }}
                  </BaseBadge>
                </div>
              </div>
              <div class="flex-shrink-0">
                <div
                  class="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  <svg
                    class="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-white transition-colors duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </ScrollReveal>
      </div>
      <div class="text-center mt-10">
        <NuxtLink :to="localePath('/blog')" class="btn-secondary group">
          {{ $t('blog.viewAll') }}
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </SectionWrapper>

    <SectionWrapper :title="$t('contact.pageTitle')" :subtitle="$t('contact.pageSubtitle')">
      <ScrollReveal>
        <div class="max-w-xl mx-auto">
          <form class="glass-card p-8 space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="home-name" class="block text-sm font-medium mb-2">{{ $t('contact.name') }}</label>
              <input id="home-name" v-model="form.name" type="text" required
                class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
                :placeholder="$t('contact.namePlaceholder')">
            </div>
            <div>
              <label for="home-email" class="block text-sm font-medium mb-2">{{ $t('contact.email') }}</label>
              <input id="home-email" v-model="form.email" type="email" required
                class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
                :placeholder="$t('contact.emailPlaceholder')">
            </div>
            <div>
              <label for="home-message" class="block text-sm font-medium mb-2">{{ $t('contact.message') }}</label>
              <textarea id="home-message" v-model="form.message" required rows="5"
                class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all resize-none"
                :placeholder="$t('contact.messagePlaceholder')" />
            </div>
            <input type="text" name="bot-field" class="hidden" tabindex="-1" autocomplete="off">
            <button type="submit" class="btn-primary w-full" :disabled="isSubmitting">
              {{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}
            </button>
            <p v-if="success" class="text-green-500 text-center text-sm">
              {{ $t('contact.success') }}
            </p>
            <p v-if="error" class="text-red-500 text-center text-sm">
              {{ error }}
            </p>
          </form>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()
const localePath = useLocalePath()
const imageBase = useImageBase()
useCardGlow()

useSeoMeta({
  title: () => `${t('hero.title')} — Full-Stack Developer & Designer`,
  description: () => t('hero.subtitle'),
})

const { data: projects } = await useAsyncData('home-projects', async () => {
  const items = await queryCollection('projects').order('date', 'DESC').limit(3).all()
  return items
})

const { data: posts } = await useAsyncData('home-posts', async () => {
  const items = await queryCollection('blog').order('date', 'DESC').limit(3).all()
  return items
})

const form = reactive({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

async function handleSubmit() {
  isSubmitting.value = true
  error.value = null
  success.value = false

  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    success.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  }
  catch {
    error.value = t('contact.error')
  }
  finally {
    isSubmitting.value = false
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.social-link-enhanced {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--color-text-tertiary);
  transition: all 0.3s ease;
  overflow: hidden;
}

.social-link-enhanced .icon-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: all 0.3s ease;
  transform: scale(0.8);
}

.social-link-enhanced:hover {
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.25);
}

.social-link-enhanced:hover .icon-bg {
  opacity: 1;
  transform: scale(1);
}
</style>
