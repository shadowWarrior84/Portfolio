/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dark: "#1b1b1b",
        light: "#f5f5f5"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxs: "400px"
    },
    backgroundImage: {
      circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
      circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #00040f 5px, #00040f 100px)",
      circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #00040f 8px, #00040f 80px)",
      circularDarkMd: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #00040f 6px, #00040f 60px)",
      circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #00040f 4px, #00040f 40px)"

    }
  },
  plugins: [],
}
