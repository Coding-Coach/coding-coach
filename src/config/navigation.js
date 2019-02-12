import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';
import { routesConfiguration } from 'config/routes';

const navConfiguration = {
  tabs: [
    {
      name: routesConfiguration.dashboard.name,
      label: 'Home', // This will be a i18 Translation, now hardcoded
      path: routesConfiguration.dashboard.path,
      icon: IconDashboard,
      selected: true,
    },
    {
      name: routesConfiguration.messages.name,
      label: 'Messages', // This will be a i18 Translation, now hardcoded
      path: routesConfiguration.messages.path,
      icon: IconMessages,
      selected: false,
    },
    {
      name: routesConfiguration.mentorships.name,
      label: 'Mentorships', // This will be a i18 Translation, now hardcoded
      path: routesConfiguration.mentorships.path,
      icon: IconMentorships,
      selected: false,
    },
    {
      name: routesConfiguration.settings.name,
      label: 'Settings', // This will be a i18 Translation, now hardcoded
      path: routesConfiguration.settings.path,
      icon: IconSettings,
      selected: false,
    },
  ],
};

export { navConfiguration };
