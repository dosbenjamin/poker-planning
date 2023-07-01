import { defineConfig, definePattern, defineTextStyles } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  patterns: {
    extend: {
      center: definePattern({
        transform: () => ({
          display: 'grid',
          placeContent: 'center',
        }),
      }),
      container: definePattern({
        transform: () => ({
          bg: 'zinc.100',
          color: 'zinc.900',
          display: 'flex',
          flexDir: 'column',
          gap: '4',
          minWidth: 'md',
          p: '8',
          rounded: 'lg',
        }),
      }),
      formControl: definePattern({
        jsxElement: 'label',
        transform: () => ({
          display: 'flex',
          flexDir: 'column',
          gap: '2',
        }),
      }),
      formInput: definePattern({
        jsxElement: 'input',
        transform: () => ({
          _focus: {
            '&:hover': {
              borderColor: 'zinc.400',
            },
            borderColor: 'zinc.400',
          },
          _hover: {
            borderColor: 'zinc.300',
          },
          borderColor: 'zinc.200',
          borderWidth: 'thin',
          display: 'block',
          outline: 'none',
          p: '4',
          rounded: 'sm',
          transition: 'border-color 250ms',
        }),
      }),
      formLabel: definePattern({
        jsxElement: 'span',
        transform: () => ({
          fontVariationSettings: '"wght" 550',
        }),
      }),
    },
  },
  preflight: true,
  theme: {
    extend: {
      textStyles: defineTextStyles({
        heading: {
          page: {
            value: {
              fontSize: '4xl',
              fontVariationSettings: '"wght" 800',
              lineHeight: '1.2',
            },
          },
        },
      }),
      tokens: {
        fonts: {
          body: { value: 'var(--font-inter), var(--font-fallback)' },
        },
      },
    },
  },
});
