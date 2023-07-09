/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui', 'tailwindcss-flip')],
  daisyui: {
    rtl: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#793ef9',
          'primary-focus': '#570df8',
          'primary-content': '#ffffff',
          secondary: '#37cdbe',
          'secondary-focus': '#2aa79b',
          'secondary-content': '#ffffff',
          accent: '#f000b8',
          'accent-focus': '#bd0091',
          'accent-content': '#ffffff',
          info: '#66c6ff',
          success: '#87d039',
          warning: '#e2d562',
          error: '#ff6f6f',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#37cdbe',
          'primary-focus': '#2aa79b',
          'primary-content': '#ffffff',
          secondary: '#793ef9',
          'secondary-focus': '#570df8',
          'secondary-content': '#ffffff',
          accent: '#f000b8',
          'accent-focus': '#bd0091',
          'accent-content': '#ffffff',
          info: '#66c6ff',
          success: '#87d039',
          warning: '#e2d562',
          error: '#ff6f6f',
        },
      },
    ],
  },
};