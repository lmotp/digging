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
  padding: rem(20) 0 rem(12);

  &__brand {
    display: inline-flex;
    align-items: center;
    min-height: rem(40);
    border-radius: $radius-pill;
    color: $color-text;
    font-size: rem(16);
    font-weight: 800;
    letter-spacing: 0;
    text-decoration: none;

    &::before {
      width: rem(12);
      height: rem(12);
      margin-right: rem(10);
      border-radius: 50%;
      background: $color-accent;
      box-shadow: 0 0 0 rem(5) rgba($color-accent, 0.12);
      content: "";
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__link {
    border-radius: $radius-pill;
    color: $color-muted;
    font-size: rem(14);
    font-weight: 700;
    min-height: rem(40);
    padding: rem(10) rem(16);
    text-decoration: none;

    &:hover,
    &.router-link-active {
      background: $color-surface;
      color: $color-text;
      box-shadow: $shadow-inset-border;
    }
  }
}

@media (max-width: 560px) {
  .app-header {
    align-items: flex-start;
    flex-direction: column;

    &__nav {
      width: 100%;
      overflow-x: auto;
      padding-bottom: rem(2);
    }
  }
}
</style>
