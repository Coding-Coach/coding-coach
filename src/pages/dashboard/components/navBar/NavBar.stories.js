import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';

import NavBar from './NavBar';
import IconDashboard from 'components/icon/Dashboard';

storiesOf('App / NavBar / Mobile', module)
  .addDecorator(withViewport('iphone5'))
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} currentPath="one" />)
  .add('More than 1 tab', () => (
    <NavBar configuration={multipleTabConfiguration} currentPath="one" />
  ));

storiesOf('App / NavBar / iPad', module)
  .addDecorator(withViewport('ipad'))
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} currentPath="one" />)
  .add('More than 1 tab', () => (
    <NavBar configuration={multipleTabConfiguration} currentPath="one" />
  ));

storiesOf('App / NavBar / Tablet and larger', module)
  .add('Only 1 tab', () => <NavBar configuration={singleTabConfiguration} currentPath="one" />)
  .add('More than 1 tab', () => (
    <NavBar configuration={multipleTabConfiguration} currentPath="one" />
  ));

const singleTabConfiguration = {
  tabs: [
    {
      name: 'name_one',
      group: 'one',
      label: 'label one',
      path: '/fake_path',
      icon: IconDashboard,
    },
  ],
};

const multipleTabConfiguration = {
  tabs: [
    {
      name: 'name_one',
      group: 'one',
      label: 'label one',
      path: '/fake_path',
      icon: IconDashboard,
    },
    {
      name: 'name_two',
      group: 'two',
      label: 'label two',
      path: '/fake_path',
      icon: IconDashboard,
    },
    {
      name: 'name_three',
      group: 'three',
      label: 'label three',
      path: '/fake_path',
      icon: IconDashboard,
    },
    {
      name: 'name_four',
      group: 'four',
      label: 'label four',
      path: '/fake_path',
      icon: IconDashboard,
    },
  ],
};
