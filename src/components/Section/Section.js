import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.scss';

function getBackgroundColorClass(bgc) {
  if (bgc === 'transparent') {
    return styles.isTransparent;
  } else if (bgc === 'white') {
    return styles.isWhite;
  } else if (bgc === 'grey') {
    return styles.isGrey;
  } else if (bgc === 'pastel') {
    return styles.isPastel;
  } else if (bgc === 'watercolor') {
    return styles.isWaterColor;
  } else {
    return '';
  }
}

const Section = ({ backgroundColor, paddingVertical, paddingHorizontal, children, className }) => (
  <section
    className={[
      styles.section,
      backgroundColor ? getBackgroundColorClass(backgroundColor) : '',
      paddingVertical ? styles.hasPaddingHorizontal : '',
      paddingHorizontal ? styles.hasPaddingVertical : '',
      className,
    ].join(' ')}
  >
    {children}
  </section>
);

Section.propTypes = {
  backgroundColor: PropTypes.oneOf(['transparent', 'white', 'grey', 'pastel', 'watercolor']),
  paddingVertical: PropTypes.bool,
  paddingHorizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  backgroundColor: 'transparent',
  paddingVertical: true,
  paddingHorizontal: true,
};

export default Section;
