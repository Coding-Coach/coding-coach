import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@reach/router';
import { Trans } from '@lingui/macro';
import IconDashboard from 'components/icon/Dashboard';
import IconMessages from 'components/icon/Messages';
import IconMentorships from 'components/icon/Mentorships';
import IconSettings from 'components/icon/Settings';
import { routesConfiguration } from 'config/routes';

function NavBar() {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-none md:pin-y md:pin-l ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 md:flex-col lg:px-4">
        <li role="presentation" className="flex-1">
          <Link getProps={getLinkClasses} to={routesConfiguration.dashboard.path} role="tab">
            {/* How can I give to the prop active... true or false?*/}
            {/*<IconDashboard className="w-10" active={isSelected}/>*/}
            <IconDashboard className="w-10" />
            <span className="block text-xs tracking-wide">
              <Trans id="dashboard.navigation.tab.home" />
            </span>
          </Link>
        </li>

        <li role="presentation" className="flex-1">
          <Link getProps={getLinkClasses} to={routesConfiguration.messages.path} role="tab">
            {/* How can I give to the prop active... true or false?*/}
            {/*<IconDashboard className="w-10" active={isSelected}/>*/}
            <IconMessages className="w-10" />
            <span className="block text-xs tracking-wide">
              <Trans id="dashboard.navigation.tab.messages" />
            </span>
          </Link>
        </li>

        <li role="presentation" className="flex-1">
          <Link getProps={getLinkClasses} to={routesConfiguration.mentorships.path} role="tab">
            {/* How can I give to the prop active... true or false?*/}
            {/*<IconDashboard className="w-10" active={isSelected}/>*/}
            <IconMentorships className="w-10" />
            <span className="block text-xs tracking-wide">
              <Trans id="dashboard.navigation.tab.mentorships" />
            </span>
          </Link>
        </li>

        <li role="presentation" className="flex-1">
          <Link getProps={getLinkClasses} to={routesConfiguration.settings.path} role="tab">
            {/* How can I give to the prop active... true or false?*/}
            {/*<IconDashboard className="w-10" active={isSelected}/>*/}
            <IconSettings className="w-10" />
            <span className="block text-xs tracking-wide">
              <Trans id="dashboard.navigation.tab.settings" />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar;

const getLinkClasses = ({ isCurrent }) => {
  return {
    className: classNames(
      'flex flex-col items-center py-2',
      'text-center py-2 no-underline no-decoration cursor-pointer',
      {
        'text-primary': isCurrent,
        'text-secondary-dark': !isCurrent,
      },
    ),
  };
};
