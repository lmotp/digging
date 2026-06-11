<script setup lang="ts">
import type { SiteFeature } from '@composables/useSiteMeta'

defineProps<{
  features: SiteFeature[]
}>()
</script>

<template>
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
</template>
