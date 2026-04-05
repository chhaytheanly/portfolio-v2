<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-12 text-center">
      {{ $t('about.pageTitle') }}
    </h1>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ScrollReveal class="md:col-span-1">
        <div class="profile-frame group">
          <div class="profile-frame__inner">
            <img :src="imageBase('/image/chhaytheanly.jpg')" alt="Profile Picture" class="profile-frame__image" loading="lazy" />
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
const imageBase = useImageBase()

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
.profile-frame {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: calc(var(--radius-lg) + 10px);
  padding: 3px;
  background:
    linear-gradient(140deg, color-mix(in srgb, var(--color-accent) 55%, transparent), transparent 55%),
    linear-gradient(315deg, color-mix(in srgb, var(--color-accent) 40%, var(--color-border)), var(--color-border));
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.15),
    0 0 0 1px color-mix(in srgb, var(--color-border) 70%, transparent) inset;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.profile-frame::after {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: calc(var(--radius-lg) - 2px);
  border: 1px solid color-mix(in srgb, var(--color-accent) 35%, transparent);
  pointer-events: none;
}

.profile-frame__inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-bg-tertiary);
}

.profile-frame__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 300ms ease;
}

.group:hover .profile-frame {
  transform: translateY(-3px);
  box-shadow:
    0 18px 35px rgba(15, 23, 42, 0.2),
    0 0 0 1px color-mix(in srgb, var(--color-accent) 35%, transparent) inset;
}

.group:hover .profile-frame__image {
  transform: scale(1.06);
}

.skill-tag:hover {
  box-shadow: 0 0 20px rgba(var(--color-accent-rgb), 0.2);
}
</style>