import React, { Component } from 'react';
import { createHistory, LocationProvider, Router } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { catalogs } from 'config/i18n';
import { Home, Login, ForgotPassword } from 'pages';
import GA from 'utils/ga';

const history = createHistory(window);
history.listen(GA.trackPage);

export default class App extends Component {
  componentDidMount() {
    GA.init();
    GA.trackPage(window);
  }

  render() {
    return (
      <I18nProvider language="en" catalogs={catalogs}>
        <LocationProvider history={history}>
          <Router>
            <Home path="/" />
            <Login path="/auth/login" />
            <ForgotPassword path="/auth/login/recovery" />
          </Router>
        </LocationProvider>
      </I18nProvider>
    );
  }
}
