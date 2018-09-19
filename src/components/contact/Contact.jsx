import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../i18n/i18n';
import styles from './assets/contact.scss';
import peopleSearch from './assets/people-search.svg';

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
        {/* <p>{t('contact-page-msg')}</p> */}
        <p>
          <Interpolate i18nKey="contact-page-msg" slackOrg={SlackOrg} email={EmailLink} />
        </p>
        <div className={styles.socialMedia}>
          <div className={styles.Icon__Wrapper}>
            <a target="_blank" href={process.env.REACT_APP_FB_URL}>
              <FontAwesomeIcon icon={faFacebook} size='2x' className={styles.greenIcons} />
            </a>
          </div>
          <div className={styles.Icon__Wrapper}>
            <a target="_blank" href={process.env.REACT_APP_INSTA_URL}>
              <FontAwesomeIcon icon={faInstagram} size='2x' className={styles.greenIcons} />
            </a>
          </div>
          <div className={styles.Icon__Wrapper}>
            <a target="_blank" href={process.env.REACT_APP_TWITTER_URL}>
              <FontAwesomeIcon icon={faTwitter} size='2x' className={styles.greenIcons} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default translate('translations')(Contact);