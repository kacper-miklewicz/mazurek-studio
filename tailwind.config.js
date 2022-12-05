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
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        animation: {
          pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
      },
    },
    screens: {
      xs: "480px",
      s: "768px",
      md: "1024px",
      l: "1280px",
      xl: "1440px",
      "2xl": "1680px",
    },
  },
  plugins: [],
};
