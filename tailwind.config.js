/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        "patrick-hand-sc": ["var(--font-patrick-hand-sc)"],
        "inria-sans": ["var(--font-inria-sans)"],
      },
      colors: {
        foreground: "var(--foreground-rgb)",
        white: "var(--color-white)",
        green: "var(--color-green)",
        "green-faded": "var(--color-green-faded)",
        "green-faded-xl": "var(--color-green-faded-xl)",
        "off-white": "var(--color-off-white)",
        gray: "var(--color-gray)",
        red: "var(--color-red)",
        blue: "var(--color-blue)",
      },
    },
  },
  plugins: [],
};
