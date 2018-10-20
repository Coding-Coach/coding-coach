import React from 'react';
import styles from './HomeSection.scss';
import PropTypes from 'prop-types';

const HomeSection = ({ id, title, text, media, children }) => (
  <section id={id} className={styles.section}>
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
  children: PropTypes.node,
};

export default HomeSection;
