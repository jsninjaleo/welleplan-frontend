import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainBlue: '#25CAD2',
        mainBlue_dark: '#1C999F',
        mainBlue_light: '#96fcff',
        mainYellow: '#FFCC6A',
        mainPurple: '#65007E',
        mainPurple_dark: '#340040',
        darkYellow_gradient: '#FFA800',
        lightYellow_gradient: '#FFC635',
      }
    },
  },
  plugins: [],
}
export default config
