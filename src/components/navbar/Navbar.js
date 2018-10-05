import React from 'react';
import styles from './navbar.scss';
import { Trans, withI18n } from '@lingui/react';

const Navbar = () => (
  <nav className={styles.navigationBar}>
    <div className={styles.leftNavLinks}>
      <a href="#" className={styles.navLinks}>
        <Trans id="about.title">About</Trans>
      </a>
      <a href="#" className={styles.navLinks}>
        <Trans id="mission.title">Mission</Trans>
      </a>
      <a href="#" className={styles.navLinks}>
        <Trans id="contact.title">Contact</Trans>
      </a>
    </div>
  </nav>
);

export default withI18n()(Navbar);
