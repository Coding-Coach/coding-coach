import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import styles from './Home.scss';
import { Navbar } from 'components';
import HomeSection from './components/HomeSection';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import Contact from 'components/contact/Contact';

const heroImage = require('./assets/images/meeting.svg');

function Home({ t }) {
  return (
    <React.Fragment>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <header>
            <h1 className={styles.heroTitle}>
              <span>{t('home-header-title')}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{t('home-header-subtitle')}</h2>
            <button className={styles.callToAction}>{t('home-header-cta')}</button>
          </header>
          <img className={styles.heroImage} alt={t('home-header-media-alt')} src={heroImage} />
        </div>
      </section>

      <main className={styles.content}>
        <HomeSection
          id="about"
          title={t('home-about-title')}
          text={t('home-about-text')}
          media={<img src={ImageAbout} alt={t('home-about-media-alt')} />}
        />
        <HomeSection
          id="mission"
          title={t('home-mission-title')}
          text={t('home-mission-text')}
          media={<img src={ImageMission} alt={t('home-mission-media-alt')} />}
        />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default translate('translations')(Home);
