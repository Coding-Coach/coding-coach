import React from 'react';
import 'i18n/i18n';
import { translate } from 'react-i18next';
import { Navbar } from 'components';
import styles from './home.scss';

const logo = require('assets/logo.png');

const Home = ({ t }) => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <Navbar />
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>{t('Coding')}</h1>
          <h1 className={styles.header}>{t('Coach')}</h1>
          <h4>{t('Connecting developers with mentors worldwide')}</h4>
          <button className={styles.learnMore}>{t('Learn More')}</button>
        </div>
        <div>
          <img alt="coding coach logo" src={logo} />
        </div>
      </div>
    </section>
  );
};

export default translate('translations')(Home);
