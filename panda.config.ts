import { defineConfig, definePattern, defineTextStyles } from '@pandacss/dev';

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  patterns: {
    extend: {
      button: definePattern({
        jsxElement: 'button',
        transform: (props) => ({
          bg: 'slate.500',
          color: 'slate.50',
          fontVariationSettings: '"wght" 700',
          p: '4',
          rounded: 'lg',
          textAlign: 'center',
          transition: 'background 250ms',
          _hover: {
            bg: 'slate.600',
          },
          _active: {
            bg: 'slate.700',
          },
          ...props,
        }),
      }),
      center: definePattern({
        transform: (props) => ({
          display: 'grid',
          placeContent: 'center',
          ...props,
        }),
      }),
      container: definePattern({
        transform: (props) => ({
          bg: 'slate.100',
          color: 'slate.900',
          display: 'flex',
          flexDir: 'column',
          gap: '4',
          minWidth: 'md',
          p: '8',
          rounded: 'lg',
          ...props,
        }),
      }),
      formControl: definePattern({
        jsxElement: 'label',
        transform: (props) => ({
          display: 'flex',
          flexDir: 'column',
          gap: '2',
          ...props,
        }),
      }),
      formInput: definePattern({
        jsxElement: 'input',
        transform: (props) => ({
          bg: 'slate.200',
          borderColor: 'slate.300',
          borderWidth: 'thin',
          color: 'slate.900',
          display: 'block',
          outline: 'none',
          p: '4',
          rounded: 'lg',
          transition: 'border-color 250ms',
          _placeholder: {
            color: 'slate.400',
          },
          _hover: {
            borderColor: 'slate.400',
          },
          _focus: {
            borderColor: 'slate.600',
            '&:hover': {
              borderColor: 'slate.600',
            },
          },
          ...props,
        }),
      }),
      formLabel: definePattern({
        jsxElement: 'span',
        transform: (props) => ({
          fontVariationSettings: '"wght" 550',
          ...props,
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
