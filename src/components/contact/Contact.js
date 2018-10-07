import React from 'react';
import { translate, Interpolate } from 'react-i18next';

import 'i18n/i18n';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';
import SocialMedia from './SocialMedia';

export const EMAIL = 'codingcoachio@gmail.com';
export const SLACK_URL =
  'https://join.slack.com/t/coding-coach/shared_invite/enQtNDMyMzUzNjAxODQyLTUwYTFkMzZmNGFhMzZjYTQwOWE2YWFjOGJhNzYyOGIxNDM5Zjc1YWQ4NjMwN2U5YzBlNjkwMTI2ZDNiOWQyMzM';

const Contact = ({ t }) => {
  const emailLink = (
    <a target="_blank" href={`mailto:${EMAIL}`} className={styles.email}>
      {EMAIL}
    </a>
  );
  const slackOrg = (
    <a href={SLACK_URL} className={styles.slackOrg}>
      {t('slack-org')}
    </a>
  );

  return (
    <section id="contact" className={styles.contact}>
      <section className={styles.leftSection}>
        <img src={peopleSearch} alt={t('contact-page-media-alt')} />
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
