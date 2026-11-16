/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070809",
          950: "#070809",
          900: "#0a0c0d",
          850: "#0d1011",
          800: "#111415",
          700: "#171b1c",
        },
        acid: {
          DEFAULT: "#d7ff4f",
          300: "#e4ff8a",
          400: "#d7ff4f",
          500: "#bfe834",
        },
        bone: "#f1f2ec",
        muted: "#8e938c",
      },
      fontFamily: {
        sans: ["Space Grotesk Variable", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      maxWidth: {
        shell: "1320px",
      },
      boxShadow: {
        glow: "0 0 80px rgba(215, 255, 79, 0.12)",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".45", transform: "scale(.8)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(700%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 32s linear infinite",
        "orbit-spin": "orbit-spin 30s linear infinite",
        "orbit-spin-slow": "orbit-spin 55s linear infinite reverse",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        "fade-up": "fade-up .9s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
};
