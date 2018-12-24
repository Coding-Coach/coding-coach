import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from './Home';

storiesOf('Dashboard', module).add('Header', () => {
  return <Home />;
});
