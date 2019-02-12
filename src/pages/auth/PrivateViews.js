import React, { Fragment } from 'react';
import NavBar from 'pages/dashboard/components/NavBar';
import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';

export default function PrivateViews({ children }) {
  return (
    <Fragment>
      <NavBar configuration={NavConfiguration} />
      {children}
    </Fragment>
  );
}

const routes = {
  dashboard: {
    name: 'dashboard',
    path: '/app/dashboard',
  },
  messages: {
    name: 'messages',
    path: '/app/messages',
  },
  mentorships: {
    name: 'mentorships',
    path: '/app/mentorships',
  },
  settings: {
    name: 'settings',
    path: '/app/settings',
  },
};

const NavConfiguration = {
  tabs: [
    {
      name: routes.dashboard.name,
      path: routes.dashboard.path,
      icon: IconDashboard,
      selected: true,
    },
    {
      name: routes.messages.name,
      path: routes.messages.path,
      icon: IconMessages,
      selected: true,
    },
    {
      name: routes.mentorships.name,
      path: routes.mentorships.path,
      icon: IconMentorships,
      selected: true,
    },
    {
      name: routes.settings.name,
      path: routes.settings.path,
      icon: IconSettings,
      selected: true,
    },
  ],
};
