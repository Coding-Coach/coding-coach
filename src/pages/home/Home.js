import React from 'react';
import 'i18n/i18n';
import { translate } from 'react-i18next';
import { Navbar } from 'components';
import styles from './assets/home.scss';
import meeting from './assets/meeting.svg';

const Home = ({ t }) => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <Navbar />
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>{t('landing-page-header')}</h1>
          <h4>{t('landing-page-subheader')}</h4>
          <button className={styles.learnMore}>{t('landing-page-start')}</button>
        </div>
        <div>
          <img alt="coding coach logo" src={meeting} />
        </div>
      </div>
    </section>
  );
};

export default translate('translations')(Home);
