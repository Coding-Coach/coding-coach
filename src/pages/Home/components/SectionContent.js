import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionContent.scss';

const SectionContent = ({ title, colored, children }) => (
  <div className={styles.sectionContent}>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
    {children}
  </div>
);

SectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  /*
    * It makes the title have the color: MainColor or Grey
    */
  colored: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SectionContent.defaultProps = {
  colored: false,
};

export default SectionContent;
