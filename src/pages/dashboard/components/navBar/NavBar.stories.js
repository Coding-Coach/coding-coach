import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import NavBar from './NavBar';
import IconDashboard from 'components/icon/Dashboard';

storiesOf('App / NavBar / Mobile', module)
  .addDecorator(withViewport('iphone5'))
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} />)
  .add('More than 1 tab', () => <NavBar configuration={multipleTabConfiguration} />);

storiesOf('App / NavBar / iPad', module)
  .addDecorator(withViewport('ipad'))
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} />)
  .add('More than 1 tab', () => <NavBar configuration={multipleTabConfiguration} />);

storiesOf('App / NavBar / Tablet and larger', module)
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} />)
  .add('More than 1 tab', () => <NavBar configuration={multipleTabConfiguration} />);

const singleTabConfiguration = {
  tabs: [0].map((element) => ({
    name: `name ${element}`,
    label: `Label for ${element}`,
    path: '/fake_path',
    icon: IconDashboard,
  })),
};

const multipleTabConfiguration = {
  tabs: [0, 1, 2, 3].map((element) => ({
    name: `name ${element}`,
    label: `Label for ${element}`,
    path: '/fake_path',
    icon: IconDashboard,
  })),
};
