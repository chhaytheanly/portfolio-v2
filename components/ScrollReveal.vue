<template>
  <div
    ref="target"
    class="animate-on-scroll"
    :class="{ 'is-visible': isVisible }"
    :data-delay="delay"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0,
})

const { target, isVisible } = useScrollAnimation()
</script>
