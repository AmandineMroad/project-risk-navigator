import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#030a0f",
        accent: {
          blue: "#a7fff",
          green: "#5cff31",
        },
        text: {
          primary: "#ffffff",
          secondary: "#1c3b3a",
        },
        border: "#1c3b3a",
      },
      spacing: {
        sidebar: "240px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;