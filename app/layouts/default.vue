<script setup lang="ts">
import LayoutHeader from '@layouts/components/LayoutHeader.vue'
</script>

<template>
  <div class="default-layout">
    <NuxtRouteAnnouncer />
    <LayoutHeader />
    <slot />
  </div>
</template>

<style scoped lang="scss" src="@styles/layouts/default.scss"></style>
