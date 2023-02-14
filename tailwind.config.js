module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#6667AF',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      dark: '#0F1923',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      body: '#ECE8E1',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Marcellus', 'serif'],
      cursive: ['Ms Madi'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
