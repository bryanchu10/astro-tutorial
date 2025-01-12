/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--color-primary))',
				secondary: 'hsl(var(--color-secondary))',
			}
		},
	},
	plugins: [],
	darkMode: 'selector'
}
