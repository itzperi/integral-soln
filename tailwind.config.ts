
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				travel: {
					dark: '#1A1F2C',
					light: '#f5f5f7',
					primary: '#6E59A5',
					secondary: '#9b87f5',
					accent: '#F97316'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'zoom-out': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0.95)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'fly-in': {
					'0%': { transform: 'translateY(50px) translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0) translateX(0)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'60%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'morph-background': {
					'0%': { backgroundColor: '#1A1F2C' },
					'100%': { backgroundColor: '#f5f5f7' }
				},
				'plane-fly': {
					'0%': { transform: 'translateX(-100%) translateY(20px) rotate(5deg)', opacity: '0' },
					'20%': { transform: 'translateX(-50%) translateY(0) rotate(0deg)', opacity: '1' },
					'80%': { transform: 'translateX(50%) translateY(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateX(100%) translateY(-20px) rotate(-5deg)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ripple': 'ripple 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'zoom-out': 'zoom-out 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fade-in': 'fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fade-out': 'fade-out 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'slide-down': 'slide-down 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fly-in': 'fly-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'morph-background': 'morph-background 2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'plane-fly': 'plane-fly 2s cubic-bezier(0.22, 1, 0.36, 1) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
