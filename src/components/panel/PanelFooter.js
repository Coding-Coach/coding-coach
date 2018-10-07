import React from 'react';
import styles from './assets/panelfooter.scss';

const Footer = ({ children }) => {
  return (
    <section className={styles.footer}>
      <div className={styles.pullRight}>{children}</div>
    </section>
  );
};

export default Footer;
