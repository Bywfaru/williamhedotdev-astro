import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'body-bg': '#1E1E1E',
      'terminal-text-1': '#FFFFFF',
      'terminal-text-2': '#2EA16D',
      'terminal-text-3': '#054E8A',
      'terminal-text-4': '#5E5C64',
      'terminal-bg': '#341329',
      'terminal-menu-bar-bg': '#282828',
      'terminal-menu-bar-btn-bg': '#3B3B3B',
      'terminal-menu-bar-btn-hover-bg': '#424242',
      'terminal-menu-bar-btn-border': '#202020',
      'terminal-cmd-question-mark': '#2B9FB2',
      'terminal-cmd-select-arrow': '#29A2B5',
      primary: '#071013',
      secondary: '#B7999C',
      tertiary: '#AAAAAA',
      'accent-1': '#DFE0E2',
      'accent-2': '#EB5160',
    },
    extend: {
      ...defaultTheme,
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
        'terminal-serif': ['Ubuntu', ...defaultTheme.fontFamily.serif],
        'terminal-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 2s step-end infinite',
      },
    },
  },
  plugins: [],
};
