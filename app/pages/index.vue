<script setup lang="ts">
import HomeComposableSample from '@components/pages/home/HomeComposableSample.vue'
import HomeFeatureGrid from '@components/pages/home/HomeFeatureGrid.vue'
import HomeHero from '@components/pages/home/HomeHero.vue'

const { name, description, features } = useSiteMeta()

useSeoMeta({
  title: name,
  description
})
</script>

<template>
  <main>
    <HomeHero />

    <HomeFeatureGrid :features="features" />

    <HomeComposableSample />
  </main>
</template>

<style scoped lang="scss" src="@styles/pages/index.scss"></style>
