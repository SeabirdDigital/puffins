/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'si-red': '#EB5757',
				'si-brown': '#5B4543', // si-red + black/75
				'si-green': '#219653'
			},
			container: {
				center: true,
				padding: '2rem'
			},
			fontFamily: {
				lora: ['Lora', 'serif'],
				nunito: ['Nunito Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};