<script setup lang="ts">
const { name, navItems } = useSiteMeta()
</script>

<template>
  <header class="app-header">
    <NuxtLink class="app-header__brand" to="/">
      {{ name }}
    </NuxtLink>

    <nav class="app-header__nav" aria-label="Primary navigation">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        class="app-header__link"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  @include page-container;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(16);
  padding: rem(20) 0;

  &__brand {
    color: $color-text;
    font-size: rem(16);
    font-weight: 800;
    text-decoration: none;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__link {
    border-radius: rem(8);
    color: $color-muted;
    font-size: rem(14);
    font-weight: 700;
    padding: rem(8) rem(12);
    text-decoration: none;

    &:hover,
    &.router-link-active {
      background: rgba($color-accent, 0.08);
      color: $color-accent-strong;
    }
  }
}
</style>
