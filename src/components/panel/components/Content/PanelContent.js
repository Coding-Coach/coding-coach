import React from 'react';
import styles from './panelcontent.scss';

const Content = ({ children }) => {
  return <section className={styles.mainContent}>{children}</section>;
};

export default Content;
