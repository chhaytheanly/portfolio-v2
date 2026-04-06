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

        <!-- Hero image and action links -->
        <div v-if="project.thumbnail" class="max-w-3xl mx-auto mb-8">
            <img :src="imageBase(project.thumbnail)" :alt="project.title"
                class="w-full rounded-xl shadow-lg object-cover" />
        </div>

        <div class="flex flex-wrap items-center gap-3 mb-8">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="btn-primary">
                Live Demo
            </a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                class="btn-secondary">
                View on GitHub
            </a>
            <div v-if="project.images && project.images.length"
                class="ml-auto text-sm text-[var(--color-text-tertiary)]">
                {{ project.images.length }} images
            </div>
        </div>

        <p v-if="project.longDescription" class="body-md text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-6">{{
            project.longDescription }}</p>

        <section class="prose prose-lg max-w-none mx-auto">
            <ContentRenderer v-if="project" :value="project" />
        </section>
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
const imageBase = useImageBase()

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

<style scoped>
/* Improve default content rendering inside prose */
.prose img {
    border-radius: 0.75rem;
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
}

.prose pre {
    background: var(--color-bg-tertiary);
    border-radius: 0.5rem;
    padding: 1rem;
    overflow: auto;
}

.prose code {
    background: rgba(0, 0, 0, 0.04);
    padding: 0.15rem 0.4rem;
    border-radius: 0.35rem;
}

/* Make markdown headings bold and prominent inside ContentRenderer */
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
    font-family: "Space Grotesk", "Inter", sans-serif;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-top: 1.25rem;
    margin-bottom: 0.6rem;
    line-height: 1.15;
}

.prose h1 {
    font-size: 1.75rem;
}

.prose h2 {
    font-size: 1.5rem;
}

.prose h3 {
    font-size: 1.25rem;
}

.prose strong {
    font-weight: 700;
}
</style>