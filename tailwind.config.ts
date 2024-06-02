import tailwindcssPluginForms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    colors: {
      white: '#fff',
      black: '#333',
      firm: '#9873ff',
      grey: {
        DEFAULT: '#c8c5d1',
        text: '#b0b0b0',
        light: '#e7e5eb',
      },
      red: '#F06A4D',
      hover: '#b89eff',
      focus: '#b89eff',
      active: '#8052ff',
    },
    fontFamily: {
      sans: ['Open Sans', 'Arial', 'sans-serif'],
    },
  },

  plugins: [tailwindcssPluginForms],
} satisfies Config;
