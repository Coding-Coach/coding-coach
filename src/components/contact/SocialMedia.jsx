import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from './assets/socialmedia.scss';

const SocialMedia = () => {
  return (
    <div className={styles.social_media}>
      <div className={styles.icon_wrapper}>
        <a target="_blank" href={process.env.REACT_APP_FB_URL}>
          <FontAwesomeIcon icon={faFacebook} size='2x' className={styles.green_icons} />
        </a>
      </div>
      <div className={styles.icon_wrapper}>
        <a target="_blank" href={process.env.REACT_APP_INSTA_URL}>
          <FontAwesomeIcon icon={faInstagram} size='2x' className={styles.green_icons} />
        </a>
      </div>
      <div className={styles.icon_wrapper}>
        <a target="_blank" href={process.env.REACT_APP_TWITTER_URL}>
          <FontAwesomeIcon icon={faTwitter} size='2x' className={styles.green_icons} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
