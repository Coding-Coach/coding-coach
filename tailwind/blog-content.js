/**
 * This plugin sets the styles for the blog content or any
 * text content dynamically set.
 */

module.exports = function() {
  return ({ addComponents, theme }) => {
    const colors = theme('colors');
    const fontFamily = theme('fontFamily');
    const fontSizes = theme('fontSize');
    const margin = theme('margin');

    const base = {
      '.blog-content': {
        h2: {
          padding: `${margin['1']} 0`,
          fontFamily: '"Fjalla One"',
          fontSize: fontSizes['2xl'],
          fontWeight: '300',

          '@media (min-width: 768px)': {
            fontSize: fontSizes['3xl'],
            fontWeight: '400',
          },
        },
        h3: {
          padding: `${margin['1']} 0`,
          fontFamily: '"Fjalla One"',
          fontSize: fontSizes['xl'],
          fontWeight: '200',

          '@media (min-width: 768px)': {
            fontSize: fontSizes['2xl'],
            fontWeight: '300',
          },
        },
        p: {
          margin: `0 0 ${margin['8']} 0`,
          fontFamily: fontFamily.body,
          color: colors['secondary-dark'],
          fontSize: fontSizes.lg,
        },
        ul: {
          margin: `0 0 ${margin['4']} 0`,
          'padding-left': '18px',

          li: {
            fontSize: fontSizes.lg,
            margin: `0 0 ${margin['1']} 0`,
            color: colors['secondary-dark'],
            'list-style-type': 'disc',
          },
        },
        a: {
          cursor: 'pointer',
          textDecoration: 'underline',
          transition: 'background 0.15s ease-out, color 0.15s ease-out',
          '&:hover': {
            color: colors.primary,
          },
        },
        code: {
          fontSize: fontSizes.base,
          background: colors['secondary-lightest'],
          display: 'inline-block',
          padding: '0 5px',
        },
        pre: {
          margin: `0 0 ${margin['8']} 0`,
          code: {
            backgroundColor: colors['secondary-lightest'],
            display: 'block',
            padding: margin['2'],
          },
        },
      },
    };

    addComponents([
      base,
    ]);
  }
}