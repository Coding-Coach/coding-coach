import React from 'react';
import styles from './assets/panelcontent.scss';

const Content = ({ children }) => {
  return <section className={styles.mainContent}>{children}</section>;
};

export default Content;
