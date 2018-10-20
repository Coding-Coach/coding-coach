import React from 'react';
import { storiesOf } from '@storybook/react';

import OverlayCookie from '../OverlayCookie';

storiesOf('OverlayCookie', module).add('renders an overlay prompting to accept cookies', () => (
  <OverlayCookie />
));
