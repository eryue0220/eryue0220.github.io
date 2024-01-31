'use strict';

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		colors: {
			...colors,
			'#1e40af': '#1e40af',
			'#27272a': '#27272a',
			'#3f3f46': '#3f3f46',
			'#525252': '#525252',
			'#d4d4d8': '#d4d4d8',
			'#475569': '#475569',
			'#F9CB81': '#F9CB81',
		},
		extend: {
			listStyleType: {
				square: 'square',
			},
			width: {
				128: '30rem',
				136: '34rem',
				144: '44rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
