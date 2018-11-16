import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import config from 'config/constants';

const SocialMedia = () => {
  return (
    <div className="flex flex-row-reverse self-center md:self-auto">
      <div className="group m-3 p-4 rounded-full border border-solid border-primary-light cursor-pointer hover:bg-primary-light transition transition-fast transition-property-all transition-timing-linear">
        <a target="_blank" href={config.social.FB_URL} rel="noreferrer noopener">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="text-primary-light group-hover:text-white transition transition-fast transition-property-all transition-timing-linear"
          />
        </a>
      </div>
      <div className="group m-3 p-4 rounded-full border border-solid border-primary-light cursor-pointer hover:bg-primary-light transition transition-fast transition-property-all transition-timing-linear">
        <a target="_blank" href={config.social.INSTA_URL} rel="noreferrer noopener">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-primary-light group-hover:text-white transition transition-fast transition-property-all transition-timing-linear"
          />
        </a>
      </div>
      <div className="group m-3 p-4 rounded-full border border-solid border-primary-light cursor-pointer hover:bg-primary-light transition transition-fast transition-property-all transition-timing-linear">
        <a target="_blank" href={config.social.TWITTER_URL} rel="noreferrer noopener">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="text-primary-light group-hover:text-white transition transition-fast transition-property-all transition-timing-linear"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
