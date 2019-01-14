import React from 'react';
import { Router } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { catalogs } from 'config/i18n';
import { Home, Login, Dashboard, ForgotPassword } from 'pages';

const App = () => {
  return (
    <I18nProvider language="en" catalogs={catalogs}>
      <Router>
        <Home path="/" />
        <Login path="/auth/login" />
        <Dashboard path="/dashboard" />
        <ForgotPassword path="/auth/login/recovery" />
      </Router>
    </I18nProvider>
  );
};

export default App;
