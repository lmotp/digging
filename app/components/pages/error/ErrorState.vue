<script setup lang="ts">
interface ErrorStateAction {
  label: string
  to?: string
  onClick?: () => void
}

defineProps<{
  statusCode: number
  title: string
  description: string
  action: ErrorStateAction
}>()
</script>

<template>
  <section class="error-state">
    <p class="error-state__code">{{ statusCode }}</p>
    <h1 class="error-state__title">{{ title }}</h1>
    <p class="error-state__description">{{ description }}</p>

    <NuxtLink
      v-if="action.to"
      class="error-state__button"
      :to="action.to"
    >
      {{ action.label }}
    </NuxtLink>
    <button
      v-else
      class="error-state__button"
      type="button"
      @click="action.onClick"
    >
      {{ action.label }}
    </button>
  </section>
</template>

<style scoped lang="scss">
.error-state {
  display: grid;
  place-items: center;
  width: min(720px, calc(100% - 2rem));
  min-height: calc(100vh - 5rem);
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;

  &__code {
    margin: 0;
    color: $color-accent;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0;
  }

  &__title {
    margin: 0.75rem 0 0;
    color: $color-text;
    font-size: clamp(2rem, 7vw, 4.5rem);
    line-height: 1;
  }

  &__description {
    max-width: 560px;
    margin: 1rem 0 0;
    color: $color-muted;
    font-size: 1rem;
    line-height: 1.7;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    margin-top: 2rem;
    border: 0;
    border-radius: 8px;
    background: $color-accent;
    color: #ffffff;
    cursor: pointer;
    font-weight: 800;
    padding: 0 1rem;
    text-decoration: none;

    &:hover {
      background: $color-accent-strong;
    }
  }
}
</style>
