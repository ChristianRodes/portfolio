import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/**/*.{js,ts,jsx,tsx}", // <--- Including src/lib for content types
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
		extend: {
			boxShadow: {
				menu: "0px 2px 12px 0px rgba(84, 84, 102, 0.16)",
			},
			keyframes: {
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideDown: {
					"0%": {
						transform: "translateY(-40px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1",
					},
					shimmer: {
						"0%": { transform: "translateX(-100%)" },
						"100%": { transform: "translateX(100%)" },
					},
				},
				progressIndeterminate: {
					"0%": { transform: "translateX(-100%)" },
					"50%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},
			animation: {
				slideUp: "slideUp 1s ease-out forwards",
				slideDown: "slideDown 2s ease-out forwards",
				progressIndeterminate:
					"progress-indeterminate 10s linear infinite", // Adjust the time (3s) to your preference
				shimmer: "shimmer 3s infinite",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
		},
	},
	darkMode: ["class", "class"],
	plugins: [
		heroui(),
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
