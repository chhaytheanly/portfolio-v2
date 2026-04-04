<template>
  <component
    :is="as"
    :to="to"
    :href="href"
    class="glass-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    :class="[variantClasses[variant]]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: 'div' | 'article' | 'section' | 'NuxtLink'
  to?: string
  href?: string
  variant?: 'default' | 'hover-lift'
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  variant: 'hover-lift',
})

const variantClasses = {
  'default': '',
  'hover-lift': 'hover:shadow-lg hover:-translate-y-1',
}
</script>
