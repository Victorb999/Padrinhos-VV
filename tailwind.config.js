module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      purple: '#6667AB',
      'purple-light': '#B5A5D1',
      dark: '#0F1923',
      'purple-400': '#b08fc9',
      'purple-500': '#7D5677',
      'purple-600': '#d3dce6',
      'purple-700': '#cbbed1',
      body: '#ECE8E1',
      black: '#000',
      gray: '#454545',
      'gray-2': '#262323',
      'gray-3': '#1E1E1E',
      white: '#fff',
      'lavanda-1': '#AD96DC',
      'lavanda-2': '#a66fb5',
      'lavanda-3': '#af7dbc',
      'lavanda-4': '#caa9d3'
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
