import React from 'react';
import { Router } from '@reach/router';
import { Home } from 'pages';
import { I18nProvider } from '@lingui/react';
import catalogEn from '../../config/i18n/en/messages.js';
// import catalogFr from '../../config/i18n/fr/messages.js';

const App = () => {
  return (
    <I18nProvider language="en" catalogs={{ en: catalogEn }}>
      <Router>
        <Home path="/" />
      </Router>
    </I18nProvider>
  );
};

export default App;
