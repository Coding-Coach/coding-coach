import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import config from 'config/constants';

import 'i18n/i18n';

import Image from 'components/image/Image';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';
import SocialMedia from './SocialMedia';

const Contact = ({ t }) => {
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
    <section id="contact" className={styles.contact}>
      <section className={styles.leftSection}>
        <Image src={peopleSearch} alt={t('contact-page-media-alt')} />
      </section>
      <section className={styles.rightSection}>
        <h1>{t('contact-page-header')}</h1>
        <p>
          <Interpolate i18nKey="contact-page-msg" slackOrg={slackOrg} email={emailLink} />
        </p>
        <SocialMedia />
      </section>
    </section>
  );
};

export default translate('translations')(Contact);
