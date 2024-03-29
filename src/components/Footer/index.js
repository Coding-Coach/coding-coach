import React, { Fragment } from 'react';
import { Link } from 'gatsby'

import CookiesBanner from '../Banner/Cookies';
import ScrollTop from '../Button/ScrollTop';

export default function Footer() {
  return (
    <Fragment>
      <footer className="container">
        <div className="pt-4 pb-8 border-t border-secondary-lightest clearfix">
          <ul className="float-right">
            <LinkItem to="/legal/terms-conditions">Terms & Conditions</LinkItem>
            <LinkItem to="/legal/cookies">Cookies</LinkItem>
            <LinkItem to="/legal/privacy">Privacy Policy</LinkItem>
            <LinkItem to="/legal/code-of-conduct">Code Of Conduct</LinkItem>
          </ul>
        </div>
      </footer>
      <CookiesBanner />
      <ScrollTop />
    </Fragment>
  );
}

function LinkItem({ children, to, target, href }) {
  const props = { children, to, target, href, className: 'text-body text-secondary-dark hover:underline hover:text-primary-light' };
  // eslint-disable-next-line
  const LinkComponent = href ? <a {...props} /> : <Link {...props} />;
  return (
    <li className="mr-4 inline-block md:ml-4 md:mr-0">
      {LinkComponent}
    </li>
  );
}
