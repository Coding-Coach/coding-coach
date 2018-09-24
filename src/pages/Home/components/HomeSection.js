import React from 'react';
import styles from './HomeSection.scss';
import PropTypes from 'prop-types';

// import Section from 'components/Section/Section'

const HomeSection = ({ title, text, media, children }) => (
  <section className={styles.section}>
    <div className={styles.sectionInner}>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
        <p className={styles.description}>{text}</p>
        {children}
      </div>
      {media}
    </div>
  </section>
);

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  media: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default HomeSection;
