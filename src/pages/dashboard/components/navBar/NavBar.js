import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@reach/router';
import { Trans } from '@lingui/macro';
import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';

export default function NavBar({ currentPath, logout }) {
  return (
    <nav className="fixed shadow pin-b pin-x bg-white md:pin-none md:pin-y md:pin-l ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 md:flex-col lg:px-4">
        <Tab
          to="/app/dashboard"
          currentPath={currentPath}
          label={<Trans id="dashboard.navigation.tab.home" />}
          Icon={IconDashboard}
        />
        <Tab
          to="/app/messages"
          currentPath={currentPath}
          label={<Trans id="dashboard.navigation.tab.messages" />}
          Icon={IconMessages}
        />
        <Tab
          to="/app/mentorships"
          currentPath={currentPath}
          label={<Trans id="dashboard.navigation.tab.mentorships" />}
          Icon={IconMentorships}
        />
        <Tab
          to="/app/settings"
          currentPath={currentPath}
          label={<Trans id="dashboard.navigation.tab.settings" />}
          Icon={IconSettings}
        />
        <Tab
          to="/"
          currentPath={currentPath}
          label={<Trans id="dashboard.navigation.tab.logout" />}
          Icon={IconSettings}
          onClick={logout}
        />
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  currentPath: PropTypes.string.isRequired,
  configuration: PropTypes.shape({
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        icon: PropTypes.func.isRequired,
      }),
    ),
  }),
};

function Tab({ currentPath, to, Icon, onClick, label }) {
  const isSelected = to !== '/' && currentPath.indexOf(to) > -1;

  return (
    <li role="presentation" className="flex-1">
      <Link
        to={to}
        onClick={onClick}
        role="tab"
        aria-selected={isSelected}
        className={classNames(
          'flex flex-col items-center py-2',
          'text-center py-2 no-underline no-decoration cursor-pointer',
          {
            'text-primary': isSelected,
            'text-secondary-dark': !isSelected,
          },
        )}
      >
        <Icon className="w-10" active={isSelected} />
        <span className="block text-xs tracking-wide">{label}</span>
      </Link>
    </li>
  );
}
