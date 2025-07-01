/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./layout/**/*.liquid',
		'./sections/**/*.liquid',
		'./snippets/**/*.liquid',
		'./templates/**/*.liquid',
		'./templates/**/*.json',
		'./assets/**/*.css',
		'./assets/**/*.js',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontSize: '2.25rem',
							fontWeight: '700',
							lineHeight: '1.2',
							marginBottom: '1rem',
						},
						h2: {
							fontSize: '1.875rem',
							fontWeight: '600',
							lineHeight: '1.3',
							marginBottom: '0.875rem',
						},
						h3: {
							fontSize: '1.5rem',
							fontWeight: '600',
							lineHeight: '1.4',
							marginBottom: '0.75rem',
						},
						h4: {
							fontSize: '1.25rem',
							fontWeight: '500',
							lineHeight: '1.5',
							marginBottom: '0.625rem',
						},
						h5: {
							fontSize: '1.125rem',
							fontWeight: '500',
							lineHeight: '1.5',
							marginBottom: '0.5rem',
						},
						h6: {
							fontSize: '1rem',
							fontWeight: '500',
							lineHeight: '1.5',
							marginBottom: '0.5rem',
						},
					},
				},
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
