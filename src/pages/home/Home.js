import React from 'react';
import 'i18n/i18n';
import { translate } from 'react-i18next';
import styles from './home.scss';

const logo = require('assets/logo.png');

const Home = ({ t }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <nav className={styles.navigationBar}>
        <div className={styles.leftNavLinks}>
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
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>{t('Coding')}</h1>
          <h1 className={styles.header}>{t('Coach')}</h1>
          <h4>{t('Connecting developers with mentors worldwide')}</h4>
          <button className={styles.learnMore}>{t('Learn More')}</button>
        </div>
        <div>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default translate('translations')(Home);
