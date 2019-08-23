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
          fontWeight: '400',
        },
        h3: {
          padding: `${margin['1']} 0`,
          fontFamily: '"Fjalla One"',
          fontSize: fontSizes['2xl'],
          fontWeight: '400',
        },
        p: {
          margin: `0 0 ${margin['8']} 0`,
          fontFamily: fontFamily.body,
          color: colors['secondary-dark'],
          fontSize: fontSizes.lg,
        },
        ul: {
          margin: `0 0 ${margin['4']} 0`,

          li: {
            fontSize: fontSizes.lg,
            margin: `0 0 ${margin['4']} 0`,
            color: colors['secondary-dark'],
          },
        },
        a: {
          color: colors.primary,
          textDecoration: 'none',
          transition: 'background 0.15s ease-out, color 0.15s ease-out',
          cursor: 'pointer',
          '&:hover': {
            background: colors['primary-light'],
            color: colors.white,
          },
        },
      },
    };

    addComponents([
      base,
    ]);
  }
}