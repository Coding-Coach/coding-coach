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
        title={t('landing-page-about-title')}
        text={t('landing-page-about-text')}
        media={<img src={ImageAbout} alt="Man walking into a laptop" />}
      />
      <HomeSection
        title={t('landing-page-mission-title')}
        text={t('landing-page-mission-text')}
        media={<img src={ImageMission} alt="Group of people" />}
      />
      <Contact />
    </main>
  );
}

export default translate('translations')(Home);
