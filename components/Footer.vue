<template>
  <footer class="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
    <div class="container-custom py-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">

        <!-- Social Links -->
        <div class="flex items-center gap-3">
          <a v-for="item in socials" :key="item.name" :href="item.link" target="_blank" rel="noopener noreferrer"
            :aria-label="item.name"
            class="group relative w-10 h-10 flex items-center justify-center rounded-full
                   bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]
                   hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent-light)]
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/10">
            <Icon :icon="item.icon" class="w-5 h-5 text-[var(--color-text-tertiary)]
                     group-hover:text-[var(--color-accent)] transition-all duration-300" />
          </a>
        </div>

        <div class="flex flex-col items-center sm:items-end gap-2 text-sm text-[var(--color-text-tertiary)]">
          <!-- Copyright -->
          <p>&copy; {{ year }} LY Chhaythean. {{ $t('footer.rights') }}</p>
          <p>{{ $t('footer.builtWith') }}</p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/chhaytheanly',
    icon: 'mdi:github'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    icon: 'mdi:linkedin'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/chhaythean',
    icon: 'mdi:telegram'
  }
]

const year = new Date().getFullYear()
</script>