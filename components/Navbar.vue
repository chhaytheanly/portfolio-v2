<template>
  <!-- eslint-disable vue/multi-word-component-names -->
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-[var(--color-bg-glass)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm': isScrolled }"
  >
    <nav
      class="container-custom flex items-center justify-between h-16 sm:h-20"
      aria-label="Main navigation"
    >
      <NuxtLink
        :to="localePath('/')"
        class="text-xl font-bold font-['Space_Grotesk'] tracking-tight hover:opacity-80 transition-opacity"
        aria-label="Home"
      >
        <span class="text-gradient">YN</span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="localePath(item.to)"
          class="nav-link px-3 py-2 text-sm font-medium relative transition-all duration-300"
          :class="{ 'nav-link--active': isActiveRoute(item.to) }"
        >
          {{ item.label }}
          <span class="nav-link-underline" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <div class="hidden sm:flex items-center gap-1">
          <button
            v-for="loc in availableLocales"
            :key="loc.code"
            class="locale-btn px-2 py-1 text-xs font-semibold rounded transition-all duration-200 uppercase"
            :class="{ 'locale-btn--active': locale === loc.code }"
            :aria-label="`Switch to ${loc.name}`"
            @click="switchLocale(loc.code)"
          >
            {{ loc.code }}
          </button>
        </div>

        <ThemeToggle />

        <button
          class="md:hidden p-2 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          :aria-expanded="mobileMenuOpen"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <div class="w-6 h-6 relative flex items-center justify-center">
            <span
              class="absolute w-5 h-0.5 bg-current rounded transition-all duration-300 origin-center"
              :class="{ 'rotate-45 translate-y-0': mobileMenuOpen, '-translate-y-1.5': !mobileMenuOpen }"
            />
            <span
              class="absolute w-5 h-0.5 bg-current rounded transition-all duration-300"
              :class="{ 'opacity-0 scale-0': mobileMenuOpen, 'opacity-100 scale-100': !mobileMenuOpen }"
            />
            <span
              class="absolute w-5 h-0.5 bg-current rounded transition-all duration-300 origin-center"
              :class="{ '-rotate-45 translate-y-0': mobileMenuOpen, 'translate-y-1.5': !mobileMenuOpen }"
            />
          </div>
        </button>
      </div>
    </nav>

    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg-glass)] backdrop-blur-xl"
      >
        <div class="container-custom py-4 space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="localePath(item.to)"
            class="block px-4 py-3 rounded-[var(--radius-md)] text-base font-medium relative transition-all duration-300"
            :class="isActiveRoute(item.to)
              ? 'text-[var(--color-accent)] bg-[var(--color-accent-light)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
            <svg
              v-if="isActiveRoute(item.to)"
              class="w-4 h-4 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </NuxtLink>

          <div class="flex items-center gap-2 pt-4 border-t border-[var(--color-border)] mt-4">
            <span class="text-sm text-[var(--color-text-tertiary)] px-2">{{ $t('common.language') }}:</span>
            <button
              v-for="loc in availableLocales"
              :key="loc.code"
              class="locale-btn px-3 py-1.5 text-sm font-semibold rounded transition-all duration-200 uppercase"
              :class="{ 'locale-btn--active': locale === loc.code }"
              @click="switchLocale(loc.code); mobileMenuOpen = false"
            >
              {{ loc.name }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('nav.about'), to: '/about' },
  { label: t('nav.projects'), to: '/projects' },
  { label: t('nav.blog'), to: '/blog' },
  { label: t('nav.contact'), to: '/contact' },
])

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: 'en' | 'fr' | 'km', name: string }>).filter(l => l.code)
})

function isActiveRoute(to: string): boolean {
  const currentPath = route.path
  const prefix = locale.value === 'en' ? '' : `/${locale.value}`
  const fullPath = to === '/' ? prefix || '/' : `${prefix}${to}`
  return currentPath === fullPath || (to !== '/' && currentPath.startsWith(fullPath))
}

function switchLocale(code: 'en' | 'fr' | 'km') {
  setLocale(code)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.nav-link {
  color: var(--color-text-secondary);
}

.nav-link:hover {
  color: var(--color-text-primary);
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
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover .nav-link-underline,
.nav-link--active .nav-link-underline {
  transform: scaleX(1);
}

.locale-btn {
  color: var(--color-text-tertiary);
  background: transparent;
}

.locale-btn:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.locale-btn--active {
  color: var(--color-accent);
  background: var(--color-accent-light);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
