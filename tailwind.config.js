/** @type {import('tailwindcss').Config} */
module.exports={
    darkMode: ["class"],
    content:["./app/**/*.{ts,tsx,js,jsx}","./components/**/*.{ts,tsx,js,jsx}","./data/**/*.{ts,tsx,js,jsx}"],
theme:{
	extend: {
		colors: {
			brand: {
				DEFAULT: '#0B5FFF',
				dark: '#0A46C4'
			},
			ink: '#0E1320',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
		fontFamily: {
			sans: [
				'Inter',
				'system-ui',
				'Segoe UI',
				'Roboto',
				'Helvetica',
				'Arial',
				'sans-serif'
			]
		},
		backgroundImage: {
			stripes: 'repeating-linear-gradient(135deg, rgba(120,0,255,.25) 0px, rgba(120,0,255,.25) 3px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 12px)'
		},
		keyframes: {
			float: {
				'0%,100%': {
					transform: 'translateY(0px)'
				},
				'50%': {
					transform: 'translateY(-6px)'
				}
			},
			shine: {
				'0%': {
					backgroundPosition: '200% 0'
				},
				'100%': {
					backgroundPosition: '-200% 0'
				}
			},
			stripesMove: {
				'0%': {
					backgroundPosition: '0 0'
				},
				'100%': {
					backgroundPosition: '200px 0'
				}
			}
		},
		animation: {
			float: 'float 6s ease-in-out infinite',
			shine: 'shine 3s linear infinite',
			stripesMove: 'stripesMove 12s linear infinite'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
},
plugins:[require('@tailwindcss/forms'),require('@tailwindcss/typography'), require("tailwindcss-animate")]}