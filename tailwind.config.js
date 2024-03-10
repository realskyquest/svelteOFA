/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
		themes: [
			'coffee',
		],
    prefix: 'dui-',
		logs: false
	},
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

