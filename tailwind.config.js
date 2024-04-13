/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fffaf4",
          200: "#fff5e9",
          300: "#fff1de",
          400: "#ffecd3",
          500: "#ffe8c8",
          600: "#ffe4bd",
          700: "#ffdfb2",
          800: "#ffdba7",
          900: "#ffd69c",
        },
        black: {
          100: "#0a2a5a",
          200: "#0d2d6a",
          300: "#10317a",
          400: "#13358a",
          500: "#16389a",
          600: "#193caa",
          700: "#1c41ba",
          800: "#1f45ca",
          900: "#224ada",
        },
        accent: {
          100: "#e1f0a5",
          200: "#d6f0af",
          300: "#cbf0b9",
          400: "#c0f0c3",
          500: "#b5f0cd",
          600: "#aaf0d7",
          700: "#9ff0e1",
          800: "#94f0eb",
          900: "#89f0f5",
        },
        darkaccent: {
          100: "#E49675",
          200: "",
        },
        gray: "#868686",
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
