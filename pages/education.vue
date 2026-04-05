<template>
  <div class="container-custom section-padding">
    <div class="max-w-3xl mx-auto text-center mb-14">
      <div
        class="inline-flex mb-4 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/60">
        <span class="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
          {{ tOr('education.badge', 'Academic Journey') }}
        </span>
      </div>
      <h1 class="heading-lg mb-3">
        {{ $t('education.pageTitle') }}
      </h1>
      <p class="body-md text-[var(--color-text-secondary)] max-w-2xl mx-auto">
        {{ $t('education.pageSubtitle') }}
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="space-y-5">
        <ScrollReveal v-for="(edu, index) in educationItems" :key="`${rt(edu.degree)}-${index}`" :delay="index * 100">
          <BaseCard
            class="edu-card group border border-[var(--color-border)]/70 bg-[var(--color-bg-glass)]/70 backdrop-blur-sm">
            <div class="p-5 sm:p-6">
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]/60 flex-shrink-0">
                  <img v-if="edu.logo" :src="imageBase(rt(edu.logo))" :alt="rt(edu.institution)"
                    class="w-full h-full object-cover" loading="lazy" width="96" height="96" />
                  <div v-else class="w-full h-full flex items-center justify-center text-[var(--color-accent)]">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 class="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] leading-tight">
                      {{ rt(edu.degree) }}
                    </h3>
                    <span
                      class="inline-flex items-center gap-1.5 text-xs sm:text-sm px-2.5 py-1 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ rt(edu.period) }}
                    </span>
                  </div>
                  <p class="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium">
                    {{ rt(edu.institution) }}
                  </p>
                </div>
              </div>

              <p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {{ rt(edu.description) }}
              </p>

              <div class="flex flex-wrap items-center gap-3 mb-4">
                <div v-if="edu.gpa"
                  class="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[var(--color-accent)]/12 border border-[var(--color-accent)]/30">
                  <span class="text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">GPA</span>
                  <span class="text-medium font-medium text-[var(--color-accent)] leading-none">{{ rt(edu.gpa) }}</span>
                </div>

                <div v-if="edu.honors"
                  class="inline-flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]/70">
                  <span class="text-xs text-[var(--color-text-tertiary)]">{{ tOr('education.honorsLabel', 'Honors')
                    }}</span>
                  <span class="text-sm font-semibold text-[var(--color-text-primary)]">{{ rt(edu.honors) }}</span>
                </div>
              </div>

              <div v-if="edu.courses?.length" class="pt-4 border-t border-[var(--color-border)]/40">
                <p class="text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] mb-2">
                  {{ tOr('education.keyCourses', 'Key Courses') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <BaseBadge v-for="(course, courseIndex) in edu.courses.slice(0, 6)" :key="courseIndex"
                    variant="subtle"
                    class="text-xs px-2.5 py-1 rounded-md hover:bg-[var(--color-accent)]/15 hover:text-[var(--color-accent)] transition-colors duration-200 cursor-default">
                    {{ rt(course) }}
                  </BaseBadge>
                  <div v-if="edu.courses.length > 6" class="text-xs px-2.5 py-1 text-[var(--color-text-tertiary)]">
                    +{{ edu.courses.length - 6 }} {{ tOr('education.more', 'more') }}
                  </div>
                </div>
              </div>

              <div v-if="edu.achievements?.length" class="mt-4 pt-4 border-t border-[var(--color-border)]/40">
                <p class="text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] mb-2">
                  {{ tOr('education.achievements', 'Achievements') }}
                </p>
                <ul class="space-y-1">
                  <li v-for="(achievement, achIndex) in edu.achievements.slice(0, 3)" :key="achIndex"
                    class="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span class="text-[var(--color-accent)] mt-0.5">•</span>
                    <span>{{ rt(achievement) }}</span>
                  </li>
                </ul>
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

const { t, te, tm, rt } = useI18n()
const imageBase = useImageBase()

const educationItems = computed(() => {
  const items = tm('education.items') as unknown

  if (!Array.isArray(items)) {
    return []
  }

  return items as Array<Record<string, any>>
})

function tOr(key: string, fallback: string): string {
  return te(key) ? t(key) : fallback
}

useSeoMeta({
  title: () => `${t('education.pageTitle')} — ${t('hero.title')}`,
  description: () => t('education.pageSubtitle'),
})
</script>

<style scoped>
/* Entrance animation for education cards only */
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

.edu-card {
  animation: fadeInUp 0.6s ease-out forwards;
  will-change: transform;
}

.edu-card:hover {
  transform: translateY(-2px);
}
</style>