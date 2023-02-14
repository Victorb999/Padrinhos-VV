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
      purple: '#6667AF',
      'purple-light': '#B5A5D1',
      dark: '#0F1923',
      'gray-light': '#d3dce6',
      body: '#ECE8E1',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Marcellus', 'serif'],
      cursive: ['"Ms Madi"', 'Cursive'],
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
