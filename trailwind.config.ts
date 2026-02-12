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
        gold: "#D4AF37",
        goldDark: "#B8962E",
        goldLight: "#F5E6B3",
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
