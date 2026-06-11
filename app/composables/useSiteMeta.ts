export interface SiteFeature {
  title: string
  description: string
}

export interface SiteNavItem {
  label: string
  to: string
}

export const useSiteMeta = () => {
  const navItems: SiteNavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'Sample', to: '/sample' }
  ]

  const features: SiteFeature[] = [
    {
      title: 'Pages',
      description: 'Route-level screens live in app/pages and are rendered through NuxtPage.'
    },
    {
      title: 'Components',
      description: 'Reusable UI is kept in app/components and auto-imported by Nuxt.'
    },
    {
      title: 'Composables',
      description: 'Shared typed state and helpers live in app/composables.'
    }
  ]

  return {
    name: 'Digging',
    description: 'Nuxt project prepared with TypeScript, Sass, pages, components, composables, and custom error handling.',
    navItems,
    features
  }
}
