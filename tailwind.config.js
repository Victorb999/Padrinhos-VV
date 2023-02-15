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
      'purple-500': '#7D5677',
      'purple-600': '#d3dce6',
      body: '#ECE8E1',
      black: '#000',
      'gray-2': '#262323',
      'gray-3': '#1E1E1E',
      white: '#fff',
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
      animate: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
