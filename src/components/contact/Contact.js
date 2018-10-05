import React from 'react';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';
import SocialMedia from './SocialMedia';
import { Trans, withI18n } from '@lingui/react';

const Contact = () => {
  const emailLink = (
    <a target="_blank" href={`mailto:${process.env.REACT_APP_EMAIL}`} className={styles.email}>
      {process.env.REACT_APP_EMAIL}
    </a>
  );
  const slackOrg = (
    <a href={process.env.REACT_APP_SLACK_URL} className={styles.slackOrg}>
      <Trans id="contact.slack">Slack Organization</Trans>
    </a>
  );

  return (
    <section className={styles.contact}>
      <div className={styles.leftSection}>
        <img src={peopleSearch} alt="people search logo" />
      </div>
      <div className={styles.rightSection}>
        <h1>
          <Trans id="contact.header">Contact</Trans>
        </h1>
        <p>
          <Trans id="contact.message">
            We want to hear your thoughts! Feel free to join our {slackOrg} or send us an email at{' '}
            {email}
          </Trans>
        </p>
        <SocialMedia />
      </div>
    </section>
  );
};

export default withI18n()(Contact);
