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
