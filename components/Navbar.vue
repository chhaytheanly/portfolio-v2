<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{
    'bg-[var(--color-bg-glass)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm': isScrolled
  }">
    <nav class="container-custom flex items-center justify-between h-16 sm:h-20">
      <NuxtLink :to="localePath('/')" class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
        <img src="/image/geek.jpg" alt="chhaythean_logo" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-2">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="localePath(item.to)"
          class="nav-link px-3 py-2 text-sm font-medium relative"
          :class="{ 'nav-link--active': isActiveRoute(item.to) }">
          {{ item.label }}
          <span class="nav-link-underline" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative">
          <button ref="langBtn"
            class="p-2 rounded-full hover:bg-[var(--color-bg-tertiary)] transition flex items-center justify-center"
            @click="toggleLang">
            <FontAwesomeIcon icon="fa-solid fa-language" class="text-base" aria-hidden="true" />
            <span class="sr-only">Language</span>
          </button>

          <Transition name="dropdown">
            <div v-if="openLang" ref="langMenu"
              class="absolute right-0 mt-2 w-40 bg-[var(--color-bg-glass)] backdrop-blur-xl border border-[var(--color-border)] rounded-xl shadow-lg overflow-hidden">
              <button v-for="loc in availableLocales" :key="loc.code" @click="switchLocale(loc.code)"
                class="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-[var(--color-bg-tertiary)] transition">
                <span>
                  {{ getFlag(loc.code) }} {{ loc.name }}
                </span>
                <span v-if="locale === loc.code">✔</span>
              </button>
            </div>
          </Transition>
        </div>

        <ThemeToggle />

        <!-- Mobile -->
        <button class="md:hidden p-2" @click="mobileMenuOpen = !mobileMenuOpen">
          ☰
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="md:hidden bg-[var(--color-bg-glass)] border-t">
        <div class="p-4 space-y-2">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="localePath(item.to)" @click="mobileMenuOpen = false"
            class="block px-4 py-2 rounded hover:bg-[var(--color-bg-tertiary)]">
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ThemeToggle from './ThemeToggle.vue'

library.add(faLanguage)

const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const openLang = ref(false)

const langMenu = ref<HTMLElement | null>(null)
const langBtn = ref<HTMLElement | null>(null)

onClickOutside(langMenu, () => {
  openLang.value = false
}, {
  ignore: [langBtn]
})

function toggleLang() {
  openLang.value = !openLang.value
}

const navItems = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.about'), to: '/about' },
  { label: t('nav.education'), to: '/education' },
  { label: t('nav.experience'), to: '/experience' },
  { label: t('nav.projects'), to: '/projects' },
  { label: t('nav.blog'), to: '/blog' },
  { label: t('nav.contact'), to: '/contact' }
])

const availableLocales = computed(() => {
  return locales.value as Array<{ code: 'en' | 'fr' | 'km'; name: string }>
})

function getFlag(code: string) {
  switch (code) {
    case 'en': return '🇺🇸'
    case 'fr': return '🇫🇷'
    case 'km': return '🇰🇭'
    default: return '🌐'
  }
}

function isActiveRoute(to: string): boolean {
  const currentPath = route.path
  const prefix = locale.value === 'en' ? '' : `/${locale.value}`
  const fullPath = to === '/' ? prefix || '/' : `${prefix}${to}`
  return currentPath === fullPath || (to !== '/' && currentPath.startsWith(fullPath))
}

function switchLocale(code: 'en' | 'fr' | 'km') {
  setLocale(code)
  openLang.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.nav-link {
  color: var(--color-text-secondary);
}

.nav-link--active {
  color: var(--color-accent);
}

.nav-link-underline {
  position: absolute;
  bottom: 4px;
  left: 12px;
  right: 12px;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link:hover .nav-link-underline,
.nav-link--active .nav-link-underline {
  transform: scaleX(1);
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>