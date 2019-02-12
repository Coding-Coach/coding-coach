import React from 'react';

function NavBar({ configuration }) {
  return (
    <nav className="fixed pin-b pin-l pin-r bg-white">
      <ul role="tablist" className="list-reset flex px-0">
        {configuration.tabs.map((tabConfig) => {
          return (
            <Tab
              name={tabConfig.name}
              path={tabConfig.path}
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

function Tab({ name, path, isSelected, icon, label }) {
  return (
    <li key={name} role="presentation" className="flex-1">
      <a
        href={path}
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
