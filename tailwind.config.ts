import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
      },
      colors: {
        bg: "#f2f5f8",
        surface: "#ffffff",
        navy: "#1a1a2e",
        sky: "#3b82c4",
        "sky-light": "#e4eaf2",
        muted: "#6b7280",
        border: "#d0d8e4",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
