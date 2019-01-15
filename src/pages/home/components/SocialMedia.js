import React from 'react';
import SocialIcon from 'components/socialIcon/SocialIcon';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import config from 'config/constants';

const SocialMedia = () => {
  return (
    <div className="flex flex-row-reverse self-center md:self-auto">
      <SocialIcon href={config.social.GITHUB_URL} icon={faGithub} size="2x" className="mr-0" />
      <SocialIcon href={config.social.FB_URL} icon={faFacebook} size="2x" />
      <SocialIcon href={config.social.TWITTER_URL} icon={faTwitter} size="2x" className="ml-0" />
    </div>
  );
};

export default SocialMedia;
