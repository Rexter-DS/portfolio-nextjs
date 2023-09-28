import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'eggshell': '#FAF3DD',
      'tea-green': '#C8D5B9',
      'cambridge-blue': '#8FC0A9',
      'verdigris': '#68B0AB',
      'paynes-gray': '#696D7D'
    }
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
export default config
