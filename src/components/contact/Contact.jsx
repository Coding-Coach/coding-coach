import React from 'react';
import { translate, Interpolate } from 'react-i18next';

import '../../i18n/i18n';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';
import SocialMedia from './SocialMedia';

const Contact = ({ t }) => {
  const EmailLink = <a target="_blank" href={`mailto:${process.env.REACT_APP_EMAIL}`} className={styles.email}>{process.env.REACT_APP_EMAIL}</a>;
  const SlackOrg = <a href={process.env.REACT_APP_SLACK_URL} className={styles.slackOrg}>{t('slack-org')}</a>;

  return (
    <section className={styles.App__Contact}>
      <div className={styles.App__LeftSection}>
        <img src={peopleSearch} className={styles.App__poepleSearch} alt="people search logo" />
      </div>
      <div className={styles.App__RightSection}>
        <h1>{t('contact-page-header')}</h1>
        <p>
          <Interpolate i18nKey="contact-page-msg" slackOrg={SlackOrg} email={EmailLink} />
        </p>
        <SocialMedia />
      </div>
    </section>
  );
};

export default translate('translations')(Contact);