import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from './Home';

storiesOf('Home', module).add('Page', () => {
  return <Home />;
});
