<template>
  <div class="container-custom section-padding">
    <div class="max-w-3xl mx-auto text-center mb-14">
      <div
        class="inline-flex mb-4 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/60">
        <span class="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--color-accent)]">
          {{ tOr('experience.badge', 'Career Path') }}
        </span>
      </div>
      <h1 class="heading-lg mb-3">
        {{ $t('experience.pageTitle') }}
      </h1>
      <p class="body-md text-[var(--color-text-secondary)] max-w-2xl mx-auto">
        {{ $t('experience.pageSubtitle') }}
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <div class="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[var(--color-border)]/40"></div>

        <div class="space-y-6">
          <ScrollReveal v-for="(exp, index) in experienceItems" :key="`${rt(exp.role)}-${index}`" :delay="index * 100">
            <div class="relative pl-12 sm:pl-20">
              <div class="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)] shadow-lg"></div>

              <BaseCard
                class="exp-card group border border-[var(--color-border)]/70 bg-[var(--color-bg-glass)]/70 backdrop-blur-sm">
                <div class="p-5 sm:p-6">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div class="flex-1">
                      <h3 class="text-lg sm:text-xl font-bold text-[var(--color-text-primary)] leading-tight mb-2">
                        {{ rt(exp.role) }}
                      </h3>
                      <div class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-1">
                        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span class="font-medium">{{ rt(exp.organization) }}</span>
                      </div>
                      <div class="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
                        <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{{ rt(exp.location) }}</span>
                      </div>
                    </div>

                    <span
                      class="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] flex-shrink-0">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ rt(exp.period) }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {{ rt(exp.description) }}
                  </p>

                  <!-- Highlights -->
                  <div v-if="exp.highlights?.length" class="mb-4">
                    <p class="text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] mb-2">
                      {{ tOr('experience.highlights', 'Key Achievements') }}
                    </p>
                    <ul class="space-y-2">
                      <li v-for="(highlight, hlIndex) in exp.highlights" :key="hlIndex"
                        class="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                        <span class="text-[var(--color-accent)] mt-1 flex-shrink-0">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd" />
                          </svg>
                        </span>
                        <span>{{ rt(highlight) }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Skills -->
                  <div v-if="exp.skills?.length" class="pt-4 border-t border-[var(--color-border)]/40">
                    <p class="text-xs uppercase tracking-[0.14em] text-[var(--color-text-tertiary)] mb-2">
                      {{ tOr('experience.skillsLabel', 'Technologies & Skills') }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <BaseBadge v-for="(skill, skillIndex) in exp.skills" :key="skillIndex"
                        variant="subtle"
                        class="text-xs px-2.5 py-1 rounded-md hover:bg-[var(--color-accent)]/15 hover:text-[var(--color-accent)] transition-colors duration-200 cursor-default">
                        {{ rt(skill) }}
                      </BaseBadge>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t, te, tm, rt } = useI18n()

const experienceItems = computed(() => {
  const items = tm('experience.items') as unknown

  if (!Array.isArray(items)) {
    return []
  }

  return items as Array<Record<string, any>>
})

function tOr(key: string, fallback: string): string {
  return te(key) ? t(key) : fallback
}

useSeoMeta({
  title: () => `${t('experience.pageTitle')} — ${t('hero.title')}`,
  description: () => t('experience.pageSubtitle'),
})
</script>

<style scoped>
/* Entrance animation for experience cards only */
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

.exp-card {
  animation: fadeInUp 0.6s ease-out forwards;
  will-change: transform;
}

.exp-card:hover {
  transform: translateY(-2px);
}
</style>
