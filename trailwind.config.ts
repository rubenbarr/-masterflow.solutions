import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPrimary: "#0B0B0B",
        goldPrimary: "#d4b426",
        goldHover: "#e6c84f",
        goldDark: "#b8962e",
      },
      fontFamily: {
        heading: ["var(--font-cinzel)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
