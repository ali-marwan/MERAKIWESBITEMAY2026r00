import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: {
          50: "#FBF6F0",
          100: "#F5E9D9",
          200: "#EFD7B8",
          300: "#E8B780",
          400: "#E09850",
          500: "#D97A2C",
          600: "#C26418",
          700: "#9A4D11",
          800: "#73390C",
          900: "#4D2607",
        },
        ink: {
          50: "#F4F5F7",
          100: "#E6E8EC",
          200: "#C8CDD6",
          300: "#9AA1AD",
          400: "#6E7787",
          500: "#4A5260",
          600: "#323A48",
          700: "#1F2733",
          800: "#161D27",
          900: "#0E1623",
        },
        sand: "#F7F3EC",
        cream: "#FBF8F3",
        paper: "#FFFFFF",
        border: "#ECE7DE",
        hairline: "#E2DCCF",
        success: "#1F7A5A",
        warning: "#B8860B",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 4.6vw + 1rem, 5.5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.5rem, 3.4vw + 1rem, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.022em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.875rem, 1.6vw + 1rem, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.018em", fontWeight: "700" },
        ],
        "display-sm": [
          "clamp(1.5rem, 0.8vw + 1rem, 1.875rem)",
          { lineHeight: "1.2", letterSpacing: "-0.014em", fontWeight: "700" },
        ],
        lead: ["1.1875rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.2", letterSpacing: "0.18em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        "screen-pro": "1600px",
        "screen-pro-xl": "1720px",
        prose: "70ch",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,22,35,0.04), 0 8px 24px -12px rgba(14,22,35,0.08)",
        lift: "0 10px 40px -15px rgba(14,22,35,0.18)",
        bronze: "0 8px 28px -12px rgba(217,122,44,0.35)",
        "ink-pop": "0 24px 60px -28px rgba(14,22,35,0.55)",
      },
      backgroundImage: {
        "bronze-radial":
          "radial-gradient(circle at 80% 20%, rgba(217,122,44,0.18), transparent 60%)",
        "ink-radial":
          "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.06), transparent 60%)",
        "hairline-grid":
          "linear-gradient(to right, #E2DCCF 1px, transparent 1px), linear-gradient(to bottom, #E2DCCF 1px, transparent 1px)",
      },
      animation: {
        "ping-slow": "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
