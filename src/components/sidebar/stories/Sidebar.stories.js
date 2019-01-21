import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Sidebar from './../Sidebar';

storiesOf('Sidebar', module).add('Button Sizes', () => (
  <div>
    <Sidebar />
  </div>
));
