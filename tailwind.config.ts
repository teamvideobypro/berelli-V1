import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff4d15",
          "orange-hover": "#e63e07",
          "orange-subtle": "rgba(255, 77, 21, 0.12)",
        },
        medical: {
          dark: "#0a0a0a",
          surface: "#111111",
          card: "#141414",
          cardAlt: "#181818",
          border: "#262626",
          cyan: "#06b6d4",
          emerald: "#059669",
          slateBg: "#f8fafc",
          slateCard: "#ffffff",
          slateBorder: "#e2e8f0",
          slateMuted: "#64748b",
          slateDark: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wideCode: "0.08em",
      },
      boxShadow: {
        spec: "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.03)",
        cardDark: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        cardLight: "0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0,0,0,0.05)",
        glowOrange: "0 0 35px -5px rgba(255, 77, 21, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
