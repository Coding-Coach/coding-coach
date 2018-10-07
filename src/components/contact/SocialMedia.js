import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './assets/socialmedia.scss';

export const FB_URL = 'https://www.facebook.com/codingcoachio/';
export const INSTA_URL = 'https://www.instagram.com/';
export const TWITTER_URL = 'https://twitter.com/codingcoach_io';

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={FB_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.greenIcons} />
        </a>
      </div>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={INSTA_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.greenIcons} />
        </a>
      </div>
      <div className={styles.iconWrapper}>
        <a target="_blank" href={TWITTER_URL} rel="noreferrer noopener">
          <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.greenIcons} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
