import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './navbar.scss';

const Navbar = ({ t }) => (
  <nav className={styles.navigationBar}>
    <div className={styles.inner}>
      <a href="#" className={styles.navLinks}>
        {t('About')}
      </a>
      <a href="#" className={styles.navLinks}>
        {t('Mission')}
      </a>
      <a href="#" className={styles.navLinks}>
        {t('Contact')}
      </a>
    </div>
  </nav>
);

export default translate('translations')(Navbar);
