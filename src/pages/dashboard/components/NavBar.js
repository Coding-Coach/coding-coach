import React from 'react';

function NavBar({ configuration }) {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-y ">
      <ul role="tablist" className="list-reset flex px-0 md:px-5">
        {configuration.tabs.map((tabConfig) => {
          return (
            <Tab
              name={tabConfig.name}
              to={tabConfig.path}
              isSelected={tabConfig.selected}
              label={tabConfig.label}
              icon={<tabConfig.icon className="w-12" active={tabConfig.selected} />}
            />
          );
        })}
      </ul>
    </nav>
  );
}

function Tab({ name, to, isSelected, icon, label }) {
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
export default NavBar;
