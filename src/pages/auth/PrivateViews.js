import React, { Fragment } from 'react';
import NavBar from 'pages/dashboard/components/navBar/NavBar';
import { navConfiguration } from 'config/navigation';

export default function PrivateViews({ children, ...rest }) {
  return (
    <Fragment>
      <NavBar configuration={navConfiguration} {...rest} />
      <main className="min-h-screen bg-secondary-lightest">{children}</main>
    </Fragment>
  );
}
