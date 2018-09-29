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
    <main className={['u-layout', styles.home].join(' ')}>
      <HomeSection
        title={t('landing-page-about-title')}
        text={t('landing-page-about-text')}
        media={<img src={ImageAbout} alt="" />}
      />
      <HomeSection
        title={t('landing-page-mission-title')}
        text={t('landing-page-mission-text')}
        media={<img src={ImageMission} alt="" />}
      />
      <Contact />
    </main>
  );
}

export default translate('translations')(Home);
