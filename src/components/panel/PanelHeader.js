import React from 'react';
import styles from './assets/panelheader.scss';

const Header = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Header;
