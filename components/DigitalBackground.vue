<template>
  <div class="clean-digital-bg absolute inset-0 overflow-hidden">
    <div class="bg-gradient-base" />
    <div class="subtle-grid" />
  </div>
</template>

<style scoped>
.clean-digital-bg {
  z-index: 0;
}

.bg-gradient-base {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 70%, rgba(139, 92, 246, 0.04) 0%, transparent 50%);
  animation: gentle-breathe 12s ease-in-out infinite;
}

:global(.dark) .bg-gradient-base {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(129, 140, 248, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(192, 132, 252, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%);
}

@keyframes gentle-breathe {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
}

.subtle-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.8;
}

:global(.dark) .subtle-grid {
  background-image:
    linear-gradient(rgba(129, 140, 248, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(129, 140, 248, 0.05) 1px, transparent 1px);
  opacity: 1;
}
</style>
