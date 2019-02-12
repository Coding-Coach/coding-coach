import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ configuration, ...rest }) {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-y ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 lg:px-4">
        {configuration.tabs.map((tabConfig) => (
          <Tab
            key={tabConfig.name}
            name={tabConfig.name}
            to={tabConfig.path}
            isSelected={tabConfig.selected}
            label={tabConfig.label}
            icon={<tabConfig.icon className="w-12" active={tabConfig.selected} />}
            {...rest}
          />
        ))}
      </ul>
    </nav>
  );
}
NavBar.propTypes = {
  configuration: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      selected: PropTypes.bool.isRequired,
    }),
  ),
};

export default NavBar;

function Tab({ name, to, icon, label, isSelected }) {
  return (
    <li key={name} role="presentation" className="flex-1">
      <a
        href={to}
        role="tab"
        aria-selected={isSelected}
        className={`block text-center py-1 no-underline no-decoration ${
          isSelected ? 'text-primary' : 'text-secondary-dark'
        }`}
      >
        {icon}
        <span className="block text-xs">{label}</span>
      </a>
    </li>
  );
}
