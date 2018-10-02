import React from 'react';
import { Router } from '@reach/router';
import { Home } from 'pages';
import { I18nProvider } from '@lingui/react';
import catalogEn from '../../locale/en/messages.js';

const App = () => {
  console.log(catalogEn);
  return (
    <I18nProvider language="en" catalogs={{ en: catalogEn }}>
      <Router>
        <Home path="/" />
      </Router>
    </I18nProvider>
  );
};

export default App;
