<template>
  <div class="min-h-screen flex flex-col">
    <SkipLink />
    <ScrollProgress />
    <Navbar />
    <main
      id="main-content"
      class="flex-1 pt-16 sm:pt-20"
      tabindex="-1"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
