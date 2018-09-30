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
    <a href={process.env.REACT_APP_SLACK_URL} className={styles.slack_org}>
      {t('slack-org')}
    </a>
  );

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.left_section}>
        <img src={peopleSearch} alt="people search logo" />
      </div>
      <div className={styles.right_section}>
        <h1>{t('contact-page-header')}</h1>
        <p>
          <Interpolate i18nKey="contact-page-msg" slackOrg={slackOrg} email={emailLink} />
        </p>
        <SocialMedia />
      </div>
    </section>
  );
};

export default translate('translations')(Contact);
