import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from './assets/socialMedia.scss';

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;