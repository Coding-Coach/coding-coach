import React from 'react';
import { storiesOf } from '@storybook/react';
import CCLogo from './CCLogo';
import Dashboard from './Dashboard';

storiesOf('Components/Icons', module)
  .add('CCLogo', () => <CCLogo height={80} width={80} />)
  .add('Dashboard active', () => <Dashboard height={80} width={80} active />)
  .add('Dashboard inactive', () => <Dashboard height={80} width={80} />);
