/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#E9F8E8",
        tech: {
          primary: "#435856",
          bg: "#B0BAAF",
        },
        arts: {
          primary: "#585343",
          bg: "#BAB8AF",
        },
      },
    },
  },
  plugins: [],
};
