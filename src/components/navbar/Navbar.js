import React from 'react';
import styles from './navbar.scss';

const Navbar = () => (
  <nav className={styles.navigationBar}>
    <div className={styles.leftNavLinks}>
      <a href="#" className={styles.navLinks}>
        About
      </a>
      <a href="#" className={styles.navLinks}>
        Mission
      </a>
      <a href="#" className={styles.navLinks}>
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;
