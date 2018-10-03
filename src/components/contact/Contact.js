import React from 'react';
import { translate, Interpolate } from 'react-i18next';

import 'i18n/i18n';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';
import SocialMedia from './SocialMedia';

const Contact = ({ t }) => {
  const emailLink = (
    <a target="_blank" href={`mailto:${process.env.REACT_APP_EMAIL}`} className={styles.email}>
      {process.env.REACT_APP_EMAIL}
    </a>
  );
  const slackOrg = (
    <a href={process.env.REACT_APP_SLACK_URL} className={styles.slackOrg}>
      {t('slack-org')}
    </a>
  );

  return (
    <section id="contact" className={styles.contact}>
      <section className={styles.leftSection}>
        <img src={peopleSearch} alt="people search logo" />
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
