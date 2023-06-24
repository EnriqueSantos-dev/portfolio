/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1.5rem",
					xl: "5rem",
				},
			},
			height: {
				mainHeight: "calc(100dvh - 72px)",
			},
			dropShadow: {
				projectShadowDark: ["0px 0px 120px rgba(200, 158, 11, 0.2)"],
				projectShadowLight: ["0px 0px 100px rgba(200, 158, 11, 0.3)"],
				gradientShadow: [
					"0px 0px 40px rgba(245, 158, 11, 0.5)",
					"0px 0px 80px rgba(0, 0, 0, 0.1)",
				],
			},
			backgroundImage: {
				hightLightGradient: "var(--hight-light-gradient)",
				radialGradient:
					"radial-gradient(40px circle at var(--x) var(--y), rgba(252, 211, 77, 0.3), #f59e0b 50%, transparent 100%)",
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				morph: "morph 8s ease infinite alternate-reverse running",
				"rocket-bounce": "rocketBounce 1s linear infinite alternate",
			},
			keyframes: {
				fadeIn: {
					from: {
						opacity: "0",
						transform: "translateY(-100px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0px)",
					},
				},
				rocketBounce: {
					from: {
						transform: "translateY(0px)",
					},
					to: {
						transform: "translateY(-10px)",
					},
				},
				morph: {
					"0% ": {
						"border-radius": "58% 72% 57% 43% / 60% 50% 75% 70%",
					},
					"20%": {
						"border-radius": "40% 65% 60% 78% / 50% 90% 70% 70%",
					},
					"40%": {
						"border-radius": "70% 45% 67% 30% / 80% 90% 56% 70%",
					},
					"60%": {
						"border-radius": "60% 90% 60% 55% / 50% 45% 90% 60%",
					},
					"80%": {
						"border-radius": "40% 50% 80% 30% / 50% 80% 50% 75%",
					},
					"100%": {
						"border-radius": "9999px",
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
