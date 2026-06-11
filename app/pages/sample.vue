<script setup lang="ts">
import SampleInfoPanel from '@components/pages/sample/SampleInfoPanel.vue'

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

    <SampleInfoPanel />
  </main>
</template>

<style scoped lang="scss" src="@styles/pages/sample.scss"></style>
