import React from 'react';
import { storiesOf } from '@storybook/react';
import CCLogo from './CCLogo';
import Dashboard from './Dashboard';
import Dismiss from './Dismiss';
import Facebook from './Facebook';
import Mentorships from './Mentorships';
import Messages from './Messages';
import Settings from './Settings';
import Twitter from './Twitter';

storiesOf('Components/Dashboard Icons', module)
  .add('CCLogo', () => <CCLogo height={80} width={80} />)
  .add('Dashboard active', () => <Dashboard height={80} width={80} active />)
  .add('Dashboard inactive', () => <Dashboard height={80} width={80} />)
  .add('Dismiss', () => <Dismiss height={80} width={80} />)
  .add('Mentorships active', () => <Mentorships height={80} width={80} active />)
  .add('Mentorships inactive', () => <Mentorships height={80} width={80} />)
  .add('Messages active', () => <Messages height={80} width={80} active />)
  .add('Messages inactive', () => <Messages height={80} width={80} />)
  .add('Settings active', () => <Settings height={80} width={80} active />)
  .add('Settings inactive', () => <Settings height={80} width={80} />);

storiesOf('Components/Social Media Icons', module)
  .add('Facebook', () => <Facebook height={80} width={80} />)
  .add('Twitter', () => <Twitter height={80} width={80} />);
