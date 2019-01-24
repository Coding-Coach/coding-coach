import React from 'react';
import { storiesOf } from '@storybook/react';
import CCLogo from './CCLogo';
import Dashboard from './Dashboard';
import Mentorships from './Mentorships';
import Messages from './Messages';

storiesOf('Components/Icons', module)
  .add('CCLogo', () => <CCLogo height={80} width={80} />)
  .add('Dashboard active', () => <Dashboard height={80} width={80} active />)
  .add('Dashboard inactive', () => <Dashboard height={80} width={80} />)
  .add('Mentorships active', () => <Mentorships height={80} width={80} active />)
  .add('Mentorships inactive', () => <Mentorships height={80} width={80} />)
  .add('Messages active', () => <Messages height={80} width={80} active />)
  .add('Messages inactive', () => <Messages height={80} width={80} />);
