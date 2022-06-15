/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '280px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "green" : "#39b54a",
        "myGrey" : "#808080"
      },
      margin :{
        "dok20%" : "-20%"
      },
      height: {
        '10vh' : '10vh',
        '15vh' : '15vh',
        '20vh' : '20vh',
        '30vh' : '30vh',
        '60vh' : '60vh',
        '65vh' : '65vh',
        '80vh' : '80vh',
        '85vh' : '85vh',
        '90vh' : '90vh',
        '100vh' : '100vh',
      },
      width: {
        '0.2rem' :  '0.2rem',
        '45%' : '45%',
      },
      fontSize: {
        '0.5rem' : '0.5rem',
        '3rem' : '3rem'
      },
      transitionDelay : {
        "0.5s" : "0.5s",
      }
    },
  },
  plugins: [require("daisyui")],
}

// https://preview.colorlib.com/theme/glint/
