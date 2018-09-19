import React from 'react';
import { translate } from 'react-i18next';
import '../../i18n/i18n';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';

const Contact = ({ t }) => {
  const SOCIAL_MEDIA_URLS = ['https://twitter.com/codingcoach_io', '', 'https://www.facebook.com/codingcoachio/'];
  const SLACK_URL = 'https://join.slack.com/t/coding-coach/shared_invite/enQtNDMyMzUzNjAxODQyLTUwYTFkMzZmNGFhMzZjYTQwOWE2YWFjOGJhNzYyOGIxNDM5Zjc1YWQ4NjMwN2U5YzBlNjkwMTI2ZDNiOWQyMzM';
  const EMAIL = 'codingcoachio@gmail.com';
  return (
    <section className={styles.App__Contact}>
      <div className={styles.App__LeftSection}>
        <img src={peopleSearch} className={styles.App__poepleSearch} alt="people search logo" />
      </div>
      <div className={styles.App__RightSection}>
        <h1>{t('contact-page-header')}</h1>
        <p>{t('contact-page-msg')}</p>
        <div className="socialMedia">

        </div>
      </div>
    </section>
  );
};

export default translate('translations')(Contact);