import { routesConfiguration } from 'config/routes';
import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';

const navConfiguration = {
  tabs: [
    {
      name: routesConfiguration.dashboard.name,
      path: routesConfiguration.dashboard.path,
      group: routesConfiguration.dashboard.group,
      label: 'dashboard.navigation.tab.home',
      icon: IconDashboard,
    },
    {
      name: routesConfiguration.messages.name,
      path: routesConfiguration.messages.path,
      group: routesConfiguration.messages.group,
      label: 'dashboard.navigation.tab.messages',
      icon: IconMessages,
    },
    {
      name: routesConfiguration.mentorships.name,
      path: routesConfiguration.mentorships.path,
      group: routesConfiguration.mentorships.group,
      label: 'dashboard.navigation.tab.mentorships',
      icon: IconMentorships,
    },
    {
      name: routesConfiguration.settings.name,
      path: routesConfiguration.settings.path,
      group: routesConfiguration.settings.group,
      label: 'dashboard.navigation.tab.settings',
      icon: IconSettings,
    },
  ],
};

export { navConfiguration };
