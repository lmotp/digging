<script setup lang="ts">
import type { NuxtError } from '#app'
import ErrorState from '@components/pages/error/ErrorState.vue'

const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)
const title = computed(() => (isNotFound.value ? 'Page not found' : 'Something went wrong'))
const description = computed(() => (
  isNotFound.value
    ? 'The page you requested does not exist or has been moved.'
    : props.error.statusMessage || props.error.message || 'An unexpected error occurred while rendering this page.'
))

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page">
    <ErrorState
      :status-code="statusCode"
      :title="title"
      :description="description"
      :action="{
        label: isNotFound ? 'Go home' : 'Return home',
        onClick: handleClearError
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.error-page {
  min-height: 100vh;
  background: $color-background;
  color: $color-text;
}
</style>
