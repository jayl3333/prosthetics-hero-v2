/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Override default blue → deep teal to kill the "AI blue" vibe.
        blue: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0d9488",
          600: "#0f766e",
          700: "#115e59",
          800: "#134e4a",
          900: "#0c2a26",
        },
        // Warm off-white background to replace cold #f0f0ee.
        cream: {
          DEFAULT: "#faf9f7",
          pill: "#f3f1ee",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          '"PingFang SC"',
          '"HarmonyOS Sans"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(13 148 136 / 0.06), 0 1px 3px 0 rgb(0 0 0 / 0.04)",
        lift: "0 8px 24px -4px rgb(13 148 136 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
