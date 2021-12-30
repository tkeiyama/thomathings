const colors = {
  white: "rgb(201, 209, 217)",
  brand: "rgb(100, 210, 255)",
  dark: "rgb(13, 17, 23)",
};

const fontFamily = {
  title: ["Comic Sans MS", "Comic Sans", "cursive"],
};

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./things/**/*.tsx",
    "./things/**/*.mdx",
    "./src/libs/createChainlink.ts",
  ],
  darkMode: "media", // or 'media' or 'class'
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
