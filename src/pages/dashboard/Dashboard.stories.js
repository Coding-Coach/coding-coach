import React from 'react';
import { storiesOf } from '@storybook/react';

import Dashboard from './Dashboard';

storiesOf('Dashboard', module).add('Header', () => {
  return <Dashboard />;
});
