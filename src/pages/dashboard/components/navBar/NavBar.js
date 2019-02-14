import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ configuration, ...rest }) {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-none md:pin-y md:pin-l ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 md:flex-col lg:px-4">
        {configuration.tabs.map((tabConfig) => {
          //const isSelected = rest
          return (
            <Tab
              key={tabConfig.name}
              name={tabConfig.name}
              to={tabConfig.path}
              isSelected={tabConfig.selected}
              label={tabConfig.label}
              icon={
                <tabConfig.icon
                  className="w-10"
                  active={tabConfig.selected}
                  data-testid={tabConfig.label}
                />
              }
              {...rest}
            />
          );
        })}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
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
      <a
        href={to}
        role="tab"
        aria-selected={isSelected}
        className={`flex flex-col items-center cursor-pointer text-center py-2 no-underline no-decoration ${
          isSelected ? 'text-primary' : 'text-secondary-dark'
        }`}
      >
        {icon}
        <span className="block text-xs tracking-wide">{label}</span>
      </a>
    </li>
  );
}
