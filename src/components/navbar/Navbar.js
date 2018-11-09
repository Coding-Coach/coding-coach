import React from 'react';
import { Trans, withI18n } from '@lingui/macro';

const handleClickOnNavigation = (id) => {
  return (event) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    window.history.pushState({}, '', `/#${id}`);
  };
};

function Navbar() {
  return (
    <nav className="bg-primary-light py-4">
      <div className="container flex justify-between md:justify-start">
        <NavLink to="about">
          <Trans id="home.about.title">About</Trans>
        </NavLink>
        <NavLink to="mission">
          <Trans id="home.mission.title">Mission</Trans>
        </NavLink>
        <NavLink to="contact">
          <Trans id="home.contact.title">Contact</Trans>
        </NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <a
      href={`#${to}`}
      className="inline-block no-underline text-primary-dark uppercase text-base md:pr-8 font-sans"
      onClick={handleClickOnNavigation(to)}
    >
      {children}
    </a>
  );
}

export default Navbar;
