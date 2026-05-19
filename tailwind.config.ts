import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F1115',
          light: '#1F2329',
          dark: '#06080B',
        },
        accent: {
          DEFAULT: '#2456C7',
          light: '#4A7AE0',
          dark: '#1A3E96',
        },
        chrome: {
          DEFAULT: '#C0C5CC',
          light: '#E1E4E8',
          dark: '#8B9099',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
        serif: ['var(--font-oswald)', 'sans-serif'],
      },
      backgroundImage: {
        'chrome-gradient': 'linear-gradient(180deg, #E1E4E8 0%, #8B9099 100%)',
        'hero-fade': 'linear-gradient(180deg, rgba(6,8,11,0.2) 0%, rgba(6,8,11,0.85) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
