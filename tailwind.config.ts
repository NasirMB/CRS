import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crs: {
          primary: "#174A2A",
          dark: "#0B2E1A",
          gold: "#D98219",
          sand: "#F5E6C8",
          sage: "#DDEAD7",
          light: "#FFFFFF",
          text: "#172018",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
