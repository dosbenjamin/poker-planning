import { defineConfig, definePattern } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  patterns: {
    extend: {
      container: definePattern({
        transform: () => ({
          bg: 'zinc.100',
          color: 'zinc.900',
          p: '8',
          rounded: 'md',
        }),
      }),
    },
  },
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
