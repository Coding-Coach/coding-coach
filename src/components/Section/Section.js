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
  } else if (bgc === 'primary') {
    return styles.isPrimary;
  } else if (bgc === 'secondary') {
    return styles.isSecondary;
  } else if (bgc === 'tertiary') {
    return styles.isTertiary;
  } else {
    return '';
  }
}

const Section = ({
  id,
  className,
  backgroundColor,
  paddingVertical,
  paddingHorizontal,
  children,
}) => (
  <section
    id={id}
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
  id: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    'transparent',
    'white',
    'grey',
    'primary',
    'secondary',
    'tertiary',
  ]),
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
