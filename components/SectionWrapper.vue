<template>
  <section
    :id="id"
    class="section-padding"
    :class="className"
  >
    <div class="container-custom">
      <div
        v-if="title || subtitle"
        class="text-center mb-12 sm:mb-16"
      >
        <h2
          v-if="title"
          class="heading-lg mb-4"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="body-lg max-w-2xl mx-auto"
        >
          {{ subtitle }}
        </p>
        <div
          v-if="divider"
          class="w-16 h-1 bg-[var(--color-accent)] rounded-full mx-auto mt-6"
        />
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  title?: string
  subtitle?: string
  variant?: 'default' | 'alternate'
  divider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  divider: true,
  variant: 'default',
})

const className = computed(() =>
  props.variant === 'alternate' ? 'bg-[var(--color-bg-secondary)]' : '',
)
</script>
