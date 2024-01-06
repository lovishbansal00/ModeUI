import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "neutral-1200": "#eeefef",
        "neutral-400": "#5a6475",
        "neutral-50": "#121417",
        "neutral-100": "#24282f",
        "pri-purple-400": "#582066",
      },
      fontFamily: {
        "para-medium-regular": "Inter",
        Manrope: "Manrope",
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
