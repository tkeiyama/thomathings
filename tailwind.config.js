const colors = {
	white: "rgb(201, 209, 217)",
	brand: "rgb(100, 210, 255)",
	dark: "rgb(13, 17, 23)",
};

const fontFamily = {
	title: ["Comic Sans MS", "Comic Sans", "cursive"],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.tsx", "./things/**/*.tsx", "./things/**/*.mdx"],
	darkMode: "media",
	theme: {
		extend: {
			colors,
			fontFamily,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
