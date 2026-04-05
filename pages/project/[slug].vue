<template>
    <article v-if="project" class="container-custom section-padding max-w-3xl mx-auto">
        <NuxtLink :to="localePath('/projects')"
            class="text-[var(--color-accent)] text-sm font-medium mb-8 inline-flex items-center gap-1 hover:underline">
            ← {{ $t('projects.backToProjects') || 'Back to Projects' }}
        </NuxtLink>

        <header class="mb-10">
            <div class="flex flex-wrap items-center gap-3 mb-4">
                <time class="text-sm text-[var(--color-text-tertiary)]">{{ formatDate(project.date) }}</time>
                <span class="text-sm text-[var(--color-text-tertiary)]">·</span>
                <span class="text-sm text-[var(--color-text-tertiary)]">{{ getCategoryLabel(project.category) }}</span>
            </div>

            <h1 class="heading-lg mb-4">
                {{ project.title }}
            </h1>

            <p class="body-lg text-[var(--color-text-secondary)] mb-5">
                {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-4">
                <BaseBadge v-for="tech in project.tech" :key="tech" variant="subtle">
                    {{ tech }}
                </BaseBadge>
            </div>
        </header>

        <ContentRenderer v-if="project" :value="project" class="prose prose-lg max-w-none" />
    </article>

    <div v-else class="container-custom section-padding max-w-3xl mx-auto text-center py-20">
        <h2 class="text-2xl font-bold mb-2">Project Not Found</h2>
        <p class="text-[var(--color-text-secondary)] mb-6">The project you're looking for doesn't exist.</p>
        <NuxtLink :to="localePath('/projects')" class="btn-primary inline-block">
            {{ $t('projects.backToProjects') || 'Back to Projects' }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
})

const route = useRoute()
const localePath = useLocalePath()

const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-reader-${slug}`, async () => {
    const bySlug = await queryCollection('projects').where('slug', '=', slug).first()
    if (bySlug) return bySlug
    return await queryCollection('projects').path(`/projects/${slug}`).first()
})

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function getCategoryLabel(category: string): string {
    const categoryMap: Record<string, string> = {
        'machine-learning': 'Machine Learning',
        engine: 'Engine',
        fullstack: 'Full-Stack',
        frontend: 'Frontend',
        backend: 'Backend',
    }
    return categoryMap[category] || category
}

useSeoMeta({
    title: () => `${project.value?.title ?? 'Project'} — Portfolio`,
    description: () => project.value?.description ?? '',
})
</script>
