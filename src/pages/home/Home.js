import React, { Fragment } from 'react';
import { translate, Interpolate } from 'react-i18next';
import { noop } from 'utils/noop';
import 'i18n/i18n';

import styles from './assets/home.scss';
import Button from 'components/button/Button';
import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import HomeSection from './components/HomeSection';
import SocialMedia from './components/SocialMedia';
import Footer from 'components/footer/Footer';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import ImageContact from './assets/images/contact.svg';

import config from 'config/constants';

const heroImage = require('./assets/images/meeting.svg');

function Home({ t }) {
  const emailLink = (
    <a target="_blank" href={`mailto:${config.contact.EMAIL}`} className={styles.email}>
      {config.contact.EMAIL}
    </a>
  );
  const slackOrg = (
    <a href={config.contact.SLACK_URL} className={styles.slackOrg}>
      {t('slack-org')}
    </a>
  );

  return (
    <Fragment>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <header className={styles.heroTextWrapper}>
            <h1 className={styles.heroTitle}>
              <span>{t('home-header-title')}</span>
            </h1>
            <h2 className={styles.heroSubtitle}>{t('home-header-subtitle')}</h2>
            <Button onClick={noop} className={styles.callToAction}>
              {t('home-header-cta')}
            </Button>
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
        <HomeSection
          id="contact"
          title={t('home-contact-title')}
          media={<img src={ImageContact} alt={t('home-contact-media-alt')} />}
        >
          <p>
            <Interpolate i18nKey="home-contact-text" slackOrg={slackOrg} email={emailLink} />
          </p>
          <SocialMedia />
        </HomeSection>
      </main>
      <Footer />
    </Fragment>
  );
}

export default translate('translations')(Home);
