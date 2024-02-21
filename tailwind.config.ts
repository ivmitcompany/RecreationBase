import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: '#a10702',
        dark: '#231f20',
        graphite: '#363333',
        light: '#f3f3f3',
      },
      fontFamily: {
        accent: 'var(--font-accent)',
        default: 'var(--font-default)',
      },
    },
  },
}
export default config
