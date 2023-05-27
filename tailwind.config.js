module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "main-bg": "#E1EBFA",
        "secondary-bg": "#F4F7FF",
        "details-bg": "#486A6F",
      },
      backgroundImage: {
        services: "url('../src/assets/services_bg.jpg')",
        projects: "url('../src/assets/projects_bg.jpg')",
      },
      colors: {
        primary: {
          "letter-color-main": "#486A6F",
          "letter-color-secondary": "#678C92",
          "button-color": "#4397A4",
          color: "#3B82F6",
          "gradient-1": "#C6DBFF",
          "gradient-2": "#E1EBFA",
          "box-shadow": "0px 4px 6px rgba(59, 130, 246, 0.25)",
        },
      },
      width: {
        400: "400px",
        445: "445px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        40: "40px",
        85: "85px",
        125: "125px",
        500: "500px",
        220: "220px",
        400: "400px",
      },
    },
  },
  plugins: [],
};
