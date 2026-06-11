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

  padding: rem(80) 0 rem(48);

  &__eyebrow {
    margin: 0 0 rem(12);
    color: $color-accent;
    font-size: rem(14);
    font-weight: 800;
    text-transform: uppercase;
  }

  &__title {
    max-width: 720px;
    margin: 0;
    color: $color-text;
    font-size: clamp(3rem, 9vw, 6rem);
    line-height: 0.95;
  }

  &__description {
    max-width: rem(640);
    margin: rem(20) 0 0;
    color: $color-muted;
    font-size: rem(18);
    line-height: 1.7;
  }
}
</style>
