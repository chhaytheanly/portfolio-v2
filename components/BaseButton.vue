<template>
  <component
    :is="as"
    :type="type"
    :to="to"
    :href="href"
    class="btn-primary"
    :class="[
      sizeClasses[size],
      variantClasses[variant],
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: 'button' | 'a' | 'NuxtLink'
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button',
  variant: 'primary',
  size: 'md',
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses = {
  primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-md hover:shadow-lg',
  secondary: 'bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]',
  ghost: 'bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent-light)]',
}
</script>
