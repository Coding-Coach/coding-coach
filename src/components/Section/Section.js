import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.scss';

const Section = ({ backgroundColor, paddingVertical, paddingHorizontal, children }) => (
  <section className={styles.section}>{children}</section>
);

Section.propTypes = {
  backgroundColor: PropTypes.oneOf(['transparent', 'white', 'grey', 'watercolor']),
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
