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

<style scoped lang="scss" src="@styles/pages/index.scss"></style>
