module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lighter: "#EDEDE9",
        light: "#D6CCC2",
        base: "#F5EBE0",
        dark: "#E3D5CA",
        darker: "#D5BDAF",
      },
    },
    screens: {
      xs: "480px",
      s: "768px",
      md: "1024px",
      l: "1280px",
      xl: "1440px",
      "2xl": "168opx",
    },
  },
  plugins: [],
};
