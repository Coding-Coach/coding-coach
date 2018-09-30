import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import styles from './Home.scss';
import { Navbar } from 'components';
import HomeSection from './components/HomeSection';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import Contact from 'components/contact/Contact';

const heroImage = require('assets/logo.png');

function Home({ t }) {
  return (
    <React.Fragment>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <header>
            <h1 className={styles.title}>
              <span>{t('Coding')}</span>
              <br />
              <span>{t('Coach')}</span>
            </h1>
            <h2>{t('Connecting developers with mentors worldwide')}</h2>
            <a href="#" className={styles.callToAction}>
              {t('Learn More')}
            </a>
          </header>
          <img class={styles.heroImage} alt="coding coach logo" src={heroImage} />
        </div>
      </section>

      <main className={styles.content}>
        <HomeSection
          title={t('home-about-title')}
          text={t('home-about-text')}
          media={<img src={ImageAbout} alt={t('home-about-media-alt')} />}
        />
        <HomeSection
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
