import React from 'react';
import { Router } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { catalogs } from '../../config/i18n/index.js';
import { Home, Login } from '../../pages/index.js';

const App = () => {
  return (
    <I18nProvider language="en" catalogs={catalogs}>
      <Router>
        <Home path="/" />
        <Login path="/auth/login" />
      </Router>
    </I18nProvider>
  );
};

export default App;
