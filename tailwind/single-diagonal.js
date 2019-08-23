
// This plugins creates a single diagonal background
// at the bottom of the given element

module.exports = function({ colors } = {}) {
  return function singleDiagonal({ addComponents, theme }) {
    const themeColors = theme('colors');
    const base = {
      '.bg-diagonal:after': {
        content: "''",
        width: '100%',
        height: '150px',
        display: 'block',
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
      [`.bg-diagonal-${name}:after`]: {
        backgroundImage: `linear-gradient(to bottom right, ${customColors[name]} 50%, #ffffff 50%)`,
      }
    }));

    addComponents([
      base,
      ...variants,
    ]);
  }
};