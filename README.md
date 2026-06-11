# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Project Structure

```text
app/
  app.vue                 # App shell and NuxtPage outlet
  error.vue               # Custom 404 and runtime error screen
  assets/scss/
    abstracts/            # Sass variables, mixins, functions
    base/                 # Global reset and base styles
  components/             # Reusable Vue components
  composables/            # Typed reusable state and helpers
  pages/                  # File-based Nuxt routes
```

## Aliases

```text
@styles      -> app/assets/scss
@components  -> app/components
@composables -> app/composables
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
