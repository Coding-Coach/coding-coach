import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.scss';

const Section = ({ children }) => <section className={styles.section}>{children}</section>;

Section.propTypes = {
  backgroundColor: PropTypes.oneOf(['transparent', 'white', 'grey', 'watercolor']),
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  backgroundColor: 'transparent',
};

export default Section;
