import React from 'react';
import styles from './navbar.scss';
import { Trans, withI18n } from '@lingui/react';

const Navbar = () => (
  <nav className={styles.navigationBar}>
    <div className={styles.leftNavLinks}>
      <a href="#" className={styles.navLinks}>
        <Trans id="About" />
      </a>
      <a href="#" className={styles.navLinks}>
        <Trans id="Mission" />
      </a>
      <a href="#" className={styles.navLinks}>
        <Trans id="Contact" />
      </a>
    </div>
  </nav>
);

export default withI18n()(Navbar);
