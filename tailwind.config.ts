import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.png')",
        hero1: "url('/images/hero1.jpg')",
        hero2: "url('/images/hero2.jpg')",
        hero3: "url('/images/hero3.jpg')",
      },
      colors: {
        milkywhite: "#fffafe",
        primary: "#009FBD",
      },

      fontFamily: {
        sans: ["Doto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
