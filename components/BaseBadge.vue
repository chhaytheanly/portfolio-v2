<template>
  <span
    class="badge"
    :class="variantClasses[variant]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'outline' | 'subtle' | 'accent'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const variantClasses = {
  default: 'bg-[var(--color-accent-light)] text-[var(--color-accent)]',
  outline: 'bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)]',
  subtle: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]',
  accent: 'bg-[var(--color-accent)] text-white',
}
</script>
