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
    font-size: rem(12);
    font-weight: 700;
    letter-spacing: rem(1.8);
    text-transform: uppercase;
  }

  &__title {
    margin: rem(12) 0 0;
    color: $color-text;
    font-family: $font-title;
    font-size: clamp(2rem, 7vw, 4.5rem);
    font-weight: 700;
    line-height: 1;
  }

  &__description {
    max-width: 560px;
    margin: rem(16) 0 0;
    color: $color-muted;
    font-size: 1rem;
    line-height: 1.55;
  }

  &__button {
    @include pill-control;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: rem(32);
    border: 0;
    background: $color-accent;
    color: #000000;
    cursor: pointer;
    padding: 0 rem(22);
    text-decoration: none;

    &:hover {
      background: $color-accent-strong;
    }
  }
}
</style>
