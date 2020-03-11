import React, { Component } from 'react';
import { createHistory, LocationProvider, Router } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { catalogs } from 'config/i18n';
import Auth from 'utils/auth';
import GA from 'utils/ga';
import {
  Home,
  Login,
  ForgotPassword,
  PrivateViews,
  Dashboard,
  Opening,
  OpeningRuleOne,
  OpeningRuleTwo,
  OpeningRuleThree,
} from 'pages';

const auth = new Auth();
const history = createHistory(window);

auth.loadSession();
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
            <Opening path="/openings" />
            <OpeningRuleOne path="/openings/jr-frontend-engineer" />
            <OpeningRuleTwo path="/openings/senior-frontend-developer-react-focus" />
            <OpeningRuleThree path="/openings/backend-nodejs-developer" />
            <Login path="/auth/login" />
            <ForgotPassword path="/auth/login/recovery" />
            <PrivateViews path="/app" auth={auth}>
              <Dashboard path="/dashboard" />
            </PrivateViews>
          </Router>
        </LocationProvider>
      </I18nProvider>
    );
  }
}
