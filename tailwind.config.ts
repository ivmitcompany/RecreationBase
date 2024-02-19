import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: 'var(--font-default)',
        accent: 'var(--font-accent)',
      },
      colors: {
        dark: '#231f20',
        light: '#f3f3f3',
        graphite: '#363333',
        accent: '#a10702',
      },
    },
  },
  plugins: [],
}
export default config
