import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220 20% 3%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(220 14% 15%)",
        card: "hsl(220 14% 6%)",
        primary: {
          DEFAULT: "#7C3AED",
          foreground: "#FFFFFF",
        },
          accent: {
          DEFAULT: "#22D3EE",
          foreground: "#0B1020",
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.6)",
      },
      backgroundImage: {
        "grid": "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.25), transparent 35%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.2), transparent 35%), radial-gradient(circle at 50% 80%, rgba(124,58,237,0.15), transparent 35%)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
