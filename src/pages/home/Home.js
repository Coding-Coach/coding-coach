import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import styles from './assets/home.scss';
import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import HomeSection from './components/HomeSection';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import OverlayCookie from 'components/overlayCookie/OverlayCookie';

const heroImage = require('./assets/images/meeting.svg');

function Home({ t }) {
  return (
    <React.Fragment>
      <OverlayCookie />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <header className={styles.heroTextWrapper}>
            <h1 className={styles.heroTitle}>
              <span>{t('home-header-title')}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{t('home-header-subtitle')}</h2>
            <button className={styles.callToAction}>{t('home-header-cta')}</button>
          </header>
          <Image className={styles.heroImage} alt={t('home-header-media-alt')} src={heroImage} />
        </div>
      </section>

      <main className={styles.content}>
        <HomeSection
          id="about"
          title={t('home-about-title')}
          text={t('home-about-text')}
          media={<Image src={ImageAbout} alt={t('home-about-media-alt')} />}
        />
        <HomeSection
          id="mission"
          title={t('home-mission-title')}
          text={t('home-mission-text')}
          media={<Image src={ImageMission} alt={t('home-mission-media-alt')} />}
        />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default translate('translations')(Home);
