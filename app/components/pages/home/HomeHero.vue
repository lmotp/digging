<script setup lang="ts">
const { name, description } = useSiteMeta()
</script>

<template>
  <section class="app-hero">
    <p class="app-hero__eyebrow">Nuxt starter structure</p>
    <h1 class="app-hero__title">{{ name }}</h1>
    <p class="app-hero__description">{{ description }}</p>
  </section>
</template>

<style scoped lang="scss">
.app-hero {
  @include page-container;

  padding: rem(72) 0 rem(32);

  &__eyebrow {
    margin: 0 0 rem(12);
    color: $color-accent;
    font-size: rem(12);
    font-weight: 700;
    letter-spacing: rem(1.8);
    text-transform: uppercase;
  }

  &__title {
    max-width: rem(760);
    margin: 0;
    color: $color-text;
    font-family: $font-title;
    font-size: clamp(2.75rem, 8vw, 5.5rem);
    font-weight: 700;
    line-height: 0.98;
  }

  &__description {
    max-width: rem(640);
    margin: rem(18) 0 0;
    color: $color-muted;
    font-size: rem(16);
    line-height: 1.55;
  }
}
</style>
