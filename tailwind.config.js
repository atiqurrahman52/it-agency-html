/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1146px",
        "2xl": "1146px",
      },
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        NotoSerif: ["Noto Serif Thai", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        openSans: ["Open_Sans_Condensed","sans-serif"],
      },

      colors: {
        yellow: "#EEA900",
        primary: "#005564",
        black_color: "#1A170F",
        secondary_color: "#FF5E37",
        light_gray: "#C0C0C0",
        csk:"#00161A"
      },
    },
  },
  plugins: [],
};
