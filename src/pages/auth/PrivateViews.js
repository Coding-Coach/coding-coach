import React, { Fragment } from 'react';
import NavBar from 'pages/dashboard/components/NavBar';
import { navConfiguration } from 'config/navigation';

export default function PrivateViews({ children, ...rest }) {
  return (
    <Fragment>
      <NavBar configuration={navConfiguration} {...rest} />
      {children}
    </Fragment>
  );
}
