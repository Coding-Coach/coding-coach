import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import styles from './Home.scss';
import HomeSection from './components/HomeSection';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import Contact from 'components/contact/Contact';

function Home({ t }) {
  return (
    <main className={styles.home}>
      <HomeSection
        title={t('home-about-title')}
        text={t('home-about-text')}
        media={<img src={ImageAbout} alt={t('home-about-media-alt')} />}
      />
      <HomeSection
        title={t('home-mission-title')}
        text={t('home-mission-text')}
        media={<img src={ImageAbout} alt={t('home-mission-media-alt')} />}
      />
      <Contact />
    </main>
  );
}

export default translate('translations')(Home);
