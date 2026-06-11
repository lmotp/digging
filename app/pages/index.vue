<script setup lang="ts">
const { name, description, features } = useSiteMeta()

useSeoMeta({
  title: name,
  description
})
</script>

<template>
  <main>
    <AppHero />

    <section class="feature-grid" aria-label="Project folders">
      <article
        v-for="feature in features"
        :key="feature.title"
        class="feature-grid__item"
      >
        <h2 class="feature-grid__title">{{ feature.title }}</h2>
        <p class="feature-grid__description">{{ feature.description }}</p>
      </article>
    </section>

    <ComposableSetupSample />
  </main>
</template>

<style scoped lang="scss">
.feature-grid {
  @include page-container;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(16);
  padding: 0 0 rem(32);

  &__item {
    min-height: rem(180);
    border: 1px solid $color-border;
    border-radius: rem(8);
    background: $color-surface;
    padding: rem(20);
  }

  &__title {
    margin: 0;
    color: $color-text;
    font-size: rem(18);
  }

  &__description {
    margin: rem(12) 0 0;
    color: $color-muted;
    line-height: 1.6;
  }
}

@media (max-width: 760px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
