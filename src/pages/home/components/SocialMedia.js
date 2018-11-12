import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import config from 'config/constants';
import styles from '../assets/socialmedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={config.social.FB_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.greenIcons} />
        </a>
      </div>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={config.social.INSTA_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.greenIcons} />
        </a>
      </div>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={config.social.TWITTER_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.greenIcons} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
