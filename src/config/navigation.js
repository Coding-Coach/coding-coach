import { routesConfiguration } from 'config/routes';
import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';

const navConfiguration = {
  tabs: [
    {
      name: routesConfiguration.dashboard.name,
      label: 'Home', // trans key => dashboard.navigation.tab.home
      path: routesConfiguration.dashboard.path,
      icon: IconDashboard,
      selected: true,
    },
    {
      name: routesConfiguration.messages.name,
      label: 'Messages', // trans key => dashboard.navigation.tab.messages
      path: routesConfiguration.messages.path,
      icon: IconMessages,
      selected: false,
    },
    {
      name: routesConfiguration.mentorships.name,
      label: 'Mentorships', // trans key => dashboard.navigation.tab.mentorshipps
      path: routesConfiguration.mentorships.path,
      icon: IconMentorships,
      selected: false,
    },
    {
      name: routesConfiguration.settings.name,
      label: 'Settings', // trans key => dashboard.navigation.tab.settings
      path: routesConfiguration.settings.path,
      icon: IconSettings,
      selected: false,
    },
  ],
};

export { navConfiguration };
