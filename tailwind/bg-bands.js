// This plugin creates two diagonal backgrounds, one at
// the top and one at the bottom.

module.exports = function({ colors } = {}) {
  return ({ addComponents, theme }) => {
    const themeColors = theme('colors');
    const base = {
      '.bg-band': {
        position: 'relative',
      },
      '.bg-band:before, .bg-band:after': {
        content: '""',
        width: '100%',
        position: 'absolute',
        left: 0,
      },
      '.bg-band:before': {
        height: '20px',
        top: '-20px',
      },
      '.bg-band:after': {
        height: '40px',
        bottom: '-40px',
      },
    };
    let customColors = themeColors;

    if (colors) {
      customColors = {};
      colors.forEach(clr => {
        if (themeColors[clr]) {
          customColors[clr] = themeColors[clr];
        }
      });
    }

    const variants = Object.keys(customColors).map(name => ({
      [`.bg-band-${name}:before`]: {
        backgroundImage: `linear-gradient(to top right, ${customColors[name]}, ${customColors[name]} 50%, white 50%, white)`,
      },
      [`.bg-band-${name}:after`]: {
        backgroundImage: `linear-gradient(to bottom left, ${customColors[name]}, ${customColors[name]} 50%, white 50%, white)`,
      },
    }));

    addComponents([
      base,
      ...variants,
    ]);
  }
}