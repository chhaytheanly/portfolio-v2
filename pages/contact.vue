<template>
  <div class="container-custom section-padding">
    <h1 class="heading-lg mb-4 text-center">
      {{ $t('contact.pageTitle') }}
    </h1>
    <p class="body-md text-center mb-12">
      {{ $t('contact.pageSubtitle') }}
    </p>
    <div class="max-w-xl mx-auto">
      <form
        class="glass-card p-8 space-y-6"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <div>
          <label
            for="name"
            class="block text-sm font-medium mb-2"
          >{{ $t('contact.name') }}</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'name-error' : undefined"
            class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
            :class="{ 'border-red-500': errors.name }"
            :placeholder="$t('contact.namePlaceholder')"
          >
          <p
            v-if="errors.name"
            id="name-error"
            class="text-red-500 text-sm mt-1"
          >
            {{ errors.name }}
          </p>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium mb-2"
          >{{ $t('contact.email') }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-error' : undefined"
            class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
            :class="{ 'border-red-500': errors.email }"
            :placeholder="$t('contact.emailPlaceholder')"
          >
          <p
            v-if="errors.email"
            id="email-error"
            class="text-red-500 text-sm mt-1"
          >
            {{ errors.email }}
          </p>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium mb-2"
          >{{ $t('contact.message') }}</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="5"
            :aria-invalid="!!errors.message"
            :aria-describedby="errors.message ? 'message-error' : undefined"
            class="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all resize-none"
            :class="{ 'border-red-500': errors.message }"
            :placeholder="$t('contact.messagePlaceholder')"
          />
          <p
            v-if="errors.message"
            id="message-error"
            class="text-red-500 text-sm mt-1"
          >
            {{ errors.message }}
          </p>
        </div>
        <input
          type="text"
          name="bot-field"
          class="hidden"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        >
        <button
          type="submit"
          class="btn-primary w-full"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}
        </button>
        <p
          v-if="success"
          class="text-green-500 text-center text-sm"
          role="alert"
        >
          {{ $t('contact.success') }}
        </p>
        <p
          v-if="error"
          class="text-red-500 text-center text-sm"
          role="alert"
        >
          {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

useSeoMeta({
  title: () => `${t('contact.pageTitle')} — ${t('hero.title')}`,
  description: () => t('contact.pageSubtitle'),
})

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

function validate() {
  Object.keys(errors).forEach((k) => {
    delete errors[k]
  })
  if (!form.name.trim()) errors.name = t('contact.nameRequired')
  if (!form.email.trim()) errors.email = t('contact.emailRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('contact.emailInvalid')
  if (!form.message.trim()) errors.message = t('contact.messageRequired')
  return Object.keys(errors).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  error.value = null
  success.value = false

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    })
    success.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  }
  catch {
    error.value = t('contact.error')
  }
  finally {
    isSubmitting.value = false
  }
}
</script>
