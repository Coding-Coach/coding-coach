import React from 'react';
import { Trans } from '@lingui/macro';
import classNames from 'classnames';

const handleClickOnNavigation = (id) => {
  return (event) => {
    const el = document.getElementById(id);

    if (el) {
      event.preventDefault();
      el.scrollIntoView({
        behavior: 'smooth',
      });
      window.history.pushState({}, '', `/#${id}`);
    }
  };
};

function Navbar() {
  return (
    <nav className="bg-primary-light py-4">
      <div className="container flex justify-between md:justify-start">
        <NavLink to="https://mentors.codingcoach.io">
          <Trans id="home.mentors.title" />
        </NavLink>
        <NavLink to="/openings/frontend-jr">
          <Trans id="home.mentors.openings" />
        </NavLink>
        <NavLink to="#about">
          <Trans id="home.about.title" />
        </NavLink>
        <NavLink to="#mission" className="hidden md:block">
          <Trans id="home.mission.title" />
        </NavLink>
        <NavLink to="#contact" className="hidden md:block">
          <Trans id="home.contact.title" />
        </NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children, className }) {
  return (
    <a
      href={to}
      className={classNames(
        'inline-block no-underline text-primary-dark uppercase text-base md:pr-8 font-sans',
        className,
      )}
      onClick={handleClickOnNavigation(to)}
    >
      {children}
    </a>
  );
}

export default Navbar;
