<script setup lang="ts">
import type { CounterDirection } from '@composables/useSetupCounter'

const { count, label, increment, decrement } = useSetupCounter(1)
const sampleDirection: CounterDirection = 'up'
</script>

<template>
  <section class="setup-sample" aria-label="Composable setup sample">
    <p class="setup-sample__eyebrow">script setup composable</p>
    <div class="setup-sample__content">
      <p class="setup-sample__count">{{ count }}</p>
      <p class="setup-sample__label">{{ label }} / {{ sampleDirection }}</p>
    </div>
    <div class="setup-sample__actions">
      <button type="button" @click="decrement">-</button>
      <button type="button" @click="increment">+</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.setup-sample {
  @include page-container;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: rem(16);
  align-items: center;
  margin-bottom: rem(80);
  border-radius: $radius-card;
  background: $color-surface;
  box-shadow: $shadow-inset-border;
  padding: rem(20);

  &__eyebrow,
  &__label {
    margin: 0;
    color: $color-muted;
    font-size: rem(12);
    font-weight: 700;
    letter-spacing: rem(1.4);
    text-transform: uppercase;
  }

  &__content {
    display: flex;
    align-items: baseline;
    gap: rem(12);
    grid-column: 1;
  }

  &__count {
    margin: 0;
    color: $color-accent;
    font-size: rem(40);
    font-weight: 800;
    line-height: 1;
  }

  &__actions {
    display: flex;
    gap: rem(8);
    grid-row: 1 / span 2;
    grid-column: 2;

    button {
      width: rem(44);
      height: rem(44);
      border-radius: 50%;
      background: $color-accent;
      color: $color-text;
      cursor: pointer;
      font-size: rem(22);
      font-weight: 800;
      line-height: 1;
      transition:
        background 160ms ease,
        transform 160ms ease;

      &:hover {
        background: $color-accent-strong;
        transform: scale(1.04);
      }
    }
  }
}

@media (max-width: 640px) {
  .setup-sample {
    grid-template-columns: 1fr;

    &__actions {
      grid-row: auto;
      grid-column: auto;
    }
  }
}
</style>
