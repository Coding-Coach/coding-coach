import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import logoImage from '../../assets/images/logo.svg';

export default React.memo(function MainNav({ showLogo, title }) {
  const css = classNames('bg-primary-light py-4', {
    'sticky top-0 z-10': showLogo,
  });

  return (
    <Fragment>
      <nav className={css}>
        <div className="container">
          {showLogo &&
            <Link to="/" className="inline-block align-top">
              <img src={logoImage} className="w-10 mr-4 md:mr-8" alt="Coding Coach Logo" />
            </Link>
          }
          <ul className="inline-block">
            <MenuLink to="https://mentors.codingcoach.io">Mentors</MenuLink>
            <MenuLink to="https://shop.spreadshirt.com/coding-coach">Store</MenuLink>
            <MenuLink to="/blog">Blog</MenuLink>
            <MenuLink to="/about">About</MenuLink>
          </ul>
        </div>
      </nav>
      { title &&
        <div className="bg-primary-light  bg-diagonal bg-diagonal-primary-light">
          <div className="container relative">
            <h1 className="absolute mt-6 font-display text-white text-5xl">{title}</h1>
          </div>
        </div>
      }
    </Fragment>
  );
});

const MenuLink = React.memo(({ children, to }) => {
  const liCss = 'mr-3 inline-block md:mr-8';
  const linkCss = 'font-medium leading-none text-primary-dark uppercase text-base border-b-4 border-primary-light md:px-1 hover:border-primary-dark';

  if (to && to.startsWith('http')) {
    return (
      <li className={liCss}>
        <a href={to} className={linkCss}>{children}</a>
      </li>
    );
  }

  return (
    <li className={liCss}>
      <Link to={to} className={linkCss}>{children}</Link>
    </li>
  );
});
