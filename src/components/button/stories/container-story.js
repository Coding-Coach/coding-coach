import React from 'react';
import styles from './styles.scss';

const Container = ({ children, title }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.childrenContainer}>{children}</div>
  </div>
);

export default Container;
