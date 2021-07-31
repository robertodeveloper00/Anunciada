module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },

      colors: {
        'primary-light': '#FAEED7',
        primary: '#FCDA99',
        terciary: '#A64141',
        'terciary-dark': '#772b2b',
        'complem-gray': '#648381',
        secondary: '#183642',
      },
    },

    fontFamily: {
      display: ['Merriweather', 'serif'],
      paragraph: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },
  plugins: [],
};
