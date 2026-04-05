<template>
  <div class="digital-background absolute inset-0 overflow-hidden pointer-events-none">
    <div class="grid-pattern" />

    <canvas ref="matrixCanvas" class="matrix-canvas" />
    <div class="code-snippets">
      <div v-for="(snippet, index) in codeSnippets" :key="index" class="code-snippet" :style="{
        left: `${snippet.x}%`,
        top: `${snippet.y}%`,
        animationDelay: `${snippet.delay}s`,
        animationDuration: `${snippet.duration}s`,
        opacity: isDark ? 0.15 : 0.08
      }">
        <code>{{ snippet.code }}</code>
      </div>
    </div>

    <div class="glow-orbs">
      <div class="glow-orb orb-1" />
      <div class="glow-orb orb-2" />
      <div class="glow-orb orb-3" />
    </div>

    <svg class="circuit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M 0,20 L 20,20 L 20,40 L 40,40 L 40,20 L 60,20 L 60,60 L 80,60 L 80,40 L 100,40" fill="none"
        :stroke="circuitColor" stroke-width="0.1" class="circuit-path" />
      <path d="M 10,80 L 30,80 L 30,60 L 50,60 L 50,80 L 70,80 L 70,30 L 90,30 L 90,70 L 100,70" fill="none"
        :stroke="circuitColor" stroke-width="0.1" class="circuit-path circuit-path-2" />
      <path d="M 0,50 L 15,50 L 15,30 L 35,30 L 35,70 L 55,70 L 55,10 L 75,10 L 75,90 L 100,90" fill="none"
        :stroke="circuitColor" stroke-width="0.1" class="circuit-path circuit-path-3" />
    </svg>

    <div class="binary-rain">
      <span v-for="digit in binaryDigits" :key="digit.id" class="binary-digit" :style="{
        left: `${digit.left}%`,
        animationDelay: `${digit.animationDelay}s`,
        animationDuration: `${digit.animationDuration}s`
      }">{{ digit.value }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type CodeSnippet = {
  code: string
  x: number
  y: number
  delay: number
  duration: number
}

type BinaryDigit = {
  id: number
  left: number
  animationDelay: number
  animationDuration: number
  value: 0 | 1
}

const matrixCanvas = ref<HTMLCanvasElement | null>(null)
const { isDark } = useTheme()

const circuitColor = computed(() =>
  isDark.value ? 'rgba(129,140,248,0.4)' : 'rgba(99,102,241,0.32)'
)

const codeSnippets = ref<CodeSnippet[]>([
  { code: 'const app = createNuxtApp()', x: 8, y: 12, delay: 0, duration: 18 },
  { code: 'useI18n({ locale: "en" })', x: 68, y: 22, delay: 1.5, duration: 21 },
  { code: 'watch(route, syncState)', x: 20, y: 38, delay: 0.8, duration: 19 },
  { code: 'definePageMeta({ layout: "default" })', x: 52, y: 56, delay: 2.1, duration: 23 },
  { code: 'const prefersDark = useTheme()', x: 12, y: 74, delay: 1.2, duration: 20 },
  { code: 'await $fetch("/api/contact")', x: 64, y: 80, delay: 2.8, duration: 22 }
])

const binaryDigits = computed<BinaryDigit[]>(() => {
  return Array.from({ length: 48 }, (_, i) => {
    const index = i + 1
    return {
      id: index,
      left: (index * 2.1) % 100,
      animationDelay: (index * 0.8) % 18,
      animationDuration: 18 + (index % 8),
      value: (index % 2) as 0 | 1
    }
  })
})

let animationFrameId: number | null = null

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ'
const fontSize = 12
const matrixColumnWidth = 10
const matrixFallSpeed = 0.35
let columns = 0
let drops: number[] = []

function initMatrix() {
  const canvas = matrixCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()

  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  ctx.scale(dpr, dpr)

  columns = Math.floor(rect.width / matrixColumnWidth)

  drops = []
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100
  }
}

function drawMatrix() {
  const canvas = matrixCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.clientWidth
  const height = canvas.clientHeight

  ctx.fillStyle = isDark.value
    ? 'rgba(10,10,10,0.08)'
    : 'rgba(255,255,255,0.08)'

  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = isDark.value
    ? 'rgba(99,102,241,0.35)'
    : 'rgba(99,102,241,0.2)'

  ctx.font = `${fontSize}px monospace`

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)]

    const x = i * matrixColumnWidth
    const y = drops[i] * fontSize

    ctx.fillText(text, x, y)

    // Reset drop randomly
    if (y > height && Math.random() > 0.985) {
      drops[i] = 0
    }

    drops[i] += matrixFallSpeed
  }

  animationFrameId = requestAnimationFrame(drawMatrix)
}

function resizeCanvas() {
  initMatrix()
}

onMounted(() => {
  initMatrix()
  drawMatrix()

  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.digital-background {
  z-index: 0;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-shift 20s linear infinite;
}

:global(.dark) .grid-pattern {
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
}

@keyframes grid-shift {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
}

.matrix-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* Floating code snippets */
.code-snippets {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.code-snippet {
  position: absolute;
  padding: 8px 12px;
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: rgba(99, 102, 241, 0.6);
  white-space: nowrap;
  animation: float-code 20s ease-in-out infinite;
  backdrop-filter: blur(2px);
}

:global(.dark) .code-snippet {
  background: rgba(99, 102, 241, 0.08);
  border-color: rgba(99, 102, 241, 0.15);
  color: rgba(129, 140, 248, 0.7);
}

@keyframes float-code {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.08;
  }

  25% {
    transform: translate(15px, -20px) rotate(1deg);
    opacity: 0.15;
  }

  50% {
    transform: translate(-10px, 15px) rotate(-1deg);
    opacity: 0.08;
  }

  75% {
    transform: translate(20px, 10px) rotate(0.5deg);
    opacity: 0.12;
  }
}

.glow-orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orb-drift 15s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 20%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  animation-delay: 0s;
}

.orb-2 {
  width: 250px;
  height: 250px;
  bottom: 20%;
  right: 15%;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 70%);
  animation-delay: -5s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%);
  animation-delay: -10s;
}

:global(.dark) .orb-1 {
  background: radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, transparent 70%);
}

:global(.dark) .orb-2 {
  background: radial-gradient(circle, rgba(192, 132, 252, 0.1) 0%, transparent 70%);
}

:global(.dark) .orb-3 {
  background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
}

@keyframes orb-drift {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(40px, -30px) scale(1.1);
  }

  66% {
    transform: translate(-30px, 40px) scale(0.9);
  }
}

.circuit-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.4;
}

.circuit-path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: circuit-draw 8s ease-in-out infinite;
}

.circuit-path-2 {
  animation-delay: -3s;
}

.circuit-path-3 {
  animation-delay: -6s;
}

@keyframes circuit-draw {

  0%,
  100% {
    stroke-dashoffset: 100;
    opacity: 0.2;
  }

  50% {
    stroke-dashoffset: 0;
    opacity: 0.6;
  }
}

.binary-rain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.binary-digit {
  position: absolute;
  top: -32px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: 600;
  color: rgba(99, 102, 241, 0.15);
  animation: binary-fall linear infinite;
}

:global(.dark) .binary-digit {
  color: rgba(129, 140, 248, 0.2);
}

@keyframes binary-fall {
  0% {
    transform: translateY(-32px);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(calc(100vh + 32px));
    opacity: 0;
  }
}
</style>
