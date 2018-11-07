import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

const handleClickOnNavigation = (id) => {
  return (event) => {
    event.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    window.history.pushState({}, '', `/#${id}`);
  };
};

const Navbar = ({ t }) => (
  <nav className="bg-primary-light py-4">
    <div className="container px-8 flex justify-between md:justify-start">
      <NavLink to="about">{t('About')}</NavLink>
      <NavLink to="mission">{t('Mission')}</NavLink>
      <NavLink to="contact">{t('Contact')}</NavLink>
    </div>
  </nav>
);

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

export default translate('translations')(Navbar);
