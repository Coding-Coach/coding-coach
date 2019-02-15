import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

function NavBar({ configuration, currentPath }) {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-none md:pin-y md:pin-l ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 md:flex-col lg:px-4">
        {configuration.tabs.map((tabConfig) => {
          const isSelected = currentPath.indexOf(tabConfig.group) !== -1;

          return (
            <Tab
              key={tabConfig.name}
              name={tabConfig.name}
              to={tabConfig.path}
              isSelected={isSelected}
              label={tabConfig.label}
              icon={<tabConfig.icon className="w-10" active={isSelected} />}
            />
          );
        })}
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

export default NavBar;

function Tab({ name, to, icon, label, isSelected }) {
  return (
    <li key={name} role="presentation" className="flex-1">
      <Link
        to={to}
        role="tab"
        aria-selected={isSelected}
        className={`flex flex-col items-center cursor-pointer text-center py-2 no-underline no-decoration ${
          isSelected ? 'text-primary' : 'text-secondary-dark'
        }`}
      >
        {icon}
        <span className="block text-xs tracking-wide">{label}</span>
      </Link>
    </li>
  );
}
