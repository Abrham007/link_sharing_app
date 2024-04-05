/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Purple: "#633CFF",
      LightPurple: "#BEADFF",
      VeryLightPurple: "#EFEBFF",
      DarkGrey: "#333333",
      Grey: "#737373",
      LightGrey: "#FAFAFA",
      Borders: "#D9D9D9",
      White: "#FFF",
      Red: "#FF3939",
    },
    fontSize: {
      xl: [
        "2rem",
        {
          lineHeight: "1.5",
          letterSpacing: "normal",
          fontWeight: "700",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "1.5",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "1.5",
          letterSpacing: "normal",
          fontWeight: "400",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
