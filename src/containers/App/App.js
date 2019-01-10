import React, { Component } from 'react';
import { Router } from '@reach/router';
import { I18nProvider } from '@lingui/react';
import { catalogs } from 'config/i18n';
import { Home, Login } from 'pages';
import Callback from 'components/callback/Callback';
import auth0Client from 'components/auth/Auth';

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }

  render() {
    return (
      <I18nProvider language="en" catalogs={catalogs}>
        <Router>
          <Home path="/" />
          <Login path="/auth/login" />
          <Callback path="/callback" />
        </Router>
      </I18nProvider>
    );
  }
}

export default App;
