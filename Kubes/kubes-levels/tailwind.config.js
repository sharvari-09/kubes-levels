/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Scans all files for Tailwind classes
    theme: {
      extend: {
        fontFamily: {
          old: ['OldEnglish', 'serif'], // Old English font
        },
        backgroundImage: {
          'wooden-button': "url('/public/assets/buttons.png')", // Wooden button texture 
        },
        animation: {
          "float": "float 4s ease-in-out infinite",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },

        },
      },
    },
    plugins: [],
};
