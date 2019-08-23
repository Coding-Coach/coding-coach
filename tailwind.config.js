
module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#202939',
      'white': '#ffffff',
      'white-dark': '#fafafa',
      'neutral': '#1f386e',

      // Green variations
      'primary-lightest': '#D5FFF4',
      'primary-lighter': '#E6F5F0',
      'primary-light': '#69D5B1',
      'primary-dark': '#126D4F',
      'primary': '#00bc89',

      // Grey variations
      'secondary-lightest': '#E8E7E7',
      'secondary-lighter': '#A8A4A4',
      'secondary-light': '#979797',
      'secondary': '#929292',
      'secondary-dark': '#4A4A4A',

      // Danger variations
      'danger-lighter': '#FFD5DB',
      'danger-light': '#EA7A71',
      'danger': '#EB6E64',
      'danger-darker': '#D4574D',

      // Backdrops
      'modal': 'rgba(0, 0, 0, 0.3)',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5.25rem',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        'display': ['"Fjalla One"', 'sans-serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
    }
  },
  variants: {},
  plugins: [
    require('./tailwind/single-diagonal')({
      colors: ['primary-light'],
    }),
    require('./tailwind/bg-bands')({
      colors: ['primary-lighter'],
    }),
    require('./tailwind/blog-content')(),
  ]
}
