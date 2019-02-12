import React from 'react';

function NavBar({ configuration }) {
  return (
    <nav className="fixed pin-b pin-l pin-r bg-white">
      <ol role="tablist" className="list-reset flex px-0 h-16">
        {configuration.tabs.map((tabConfig) => {
          return (
            <li key={tabConfig.name} role="presentation" className="flex-1">
              <a
                href={tabConfig.path}
                role="tab"
                aria-selected={tabConfig.selected}
                className="block text-center"
              >
                <tabConfig.icon className="w-16" active={tabConfig.selected} />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default NavBar;
