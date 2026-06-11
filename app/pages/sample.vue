<script setup lang="ts">
const title = 'Sample page'
const description = 'This page keeps its SCSS in app/assets/scss/pages/sample.scss through the @styles alias.'

useSeoMeta({
  title,
  description
})
</script>

<template>
  <main class="sample-page">
    <p class="sample-page__eyebrow">page-level scss</p>
    <h1 class="sample-page__title">{{ title }}</h1>
    <p class="sample-page__description">{{ description }}</p>

    <section class="sample-page__panel" aria-label="SCSS usage pattern">
      <h2 class="sample-page__panel-title">Separated page style</h2>
      <p class="sample-page__panel-text">
        Page components can stay focused on template and setup logic while page-specific styles live in the Sass pages folder.
      </p>
    </section>
  </main>
</template>

<style scoped lang="scss" src="@styles/pages/sample.scss"></style>
