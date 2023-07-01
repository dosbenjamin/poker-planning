import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  preflight: true,
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-inter), var(--font-fallback)' },
        },
      },
    },
  },
});
