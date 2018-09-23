import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.scss';

function getBackgroundColorClass(bgc) {
  return bgc ? styles[`is${bgc.charAt(0).toUpperCase() + bgc.slice(1)}`] : '';
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
