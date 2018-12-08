import React from 'react';
import { node, string } from 'prop-types';
import styles from './HomeSection.module.scss';

const HomeSection = ({ id, title, text, media, children }) => (
  <section id={id} className={styles.section}>
    <div className={styles.sectionInner}>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
        {styles.description && <p className={styles.description}>{text}</p>}
        {children}
      </div>
      {media}
    </div>
  </section>
);

HomeSection.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  text: string,
  media: node.isRequired,
  children: node,
};

export default HomeSection;
