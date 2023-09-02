/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  
	plugins: [require('flowbite/plugin')],
  
	darkMode: 'class',
  
	theme: {
	  extend: {
		keyframes:{
			wiggle:{
				'0%,100%':{transform: 'rotate(-3deg)'},
				'50%':{transform: 'rotate(3deg)'},
			},
			fadeIn:{
				"0%": {opacity:0},
				"100%": {opacity:1}
			}
		},
		animation:{
			fadeIn: 'fadeIn 2s ease-in forwards'
		},
		colors: {
		  // flowbite-svelte
		  primary: {
			50: '#FFF5F2',
			100: '#FFF1EE',
			200: '#FFE4DE',
			300: '#FFD5CC',
			400: '#FFBCAD',
			500: '#FE795D',
			600: '#EF562F',
			700: '#EB4F27',
			800: '#CC4522',
			900: '#A5371B'
		  }
		}
	  }
	}
  };
  
  module.exports = config;
