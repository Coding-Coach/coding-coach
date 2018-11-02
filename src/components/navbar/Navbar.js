import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './navbar.scss';

const handleClickOnNavigation = (id) => {
  return (event) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    window.history.pushState({}, '', `/#${id}`);
  };
};

const Navbar = ({ t }) => (
  <nav className={styles.navigationBar}>
    <div className={styles.inner}>
      <a href="#about" className={styles.navLinks} onClick={handleClickOnNavigation('about')}>
        {t('About')}
      </a>
      <a href="#mission" className={styles.navLinks} onClick={handleClickOnNavigation('mission')}>
        {t('Mission')}
      </a>
      <a href="#contact" className={styles.navLinks} onClick={handleClickOnNavigation('contact')}>
        {t('Contact')}
      </a>
    </div>
  </nav>
);

export default translate('translations')(Navbar);
