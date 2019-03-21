import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';
import { Trans } from '@lingui/macro';
import NavBar from 'pages/dashboard/components/navBar/NavBar';
import Button from 'components/button/Button';
import { Panel, PanelContent } from 'components/panel/Panel';

export default class PrivateViews extends Component {
  static propTypes = {
    auth: object,
  };

  state = {
    isAuthenticated: this.props.auth.isAuthenticated(),
  };

  componentDidMount() {
    const { auth } = this.props;

    auth.handleAuthentication().then(() => {
      this.setState({
        isAuthenticated: auth.isAuthenticated(),
      });
    });
  }

  render() {
    const { children, auth, ...rest } = this.props;
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return (
        <Fragment>
          <NavBar currentPath={rest.location.pathname} logout={auth.logout} />
          <main className="min-h-screen bg-white-dark">{children}</main>
        </Fragment>
      );
    }

    return (
      <div className="flex items-center justify-center h-screen bg-gradient-primary">
        <div className="px-2 md:w-3/5 lg:w-1/3">
          <Panel floating>
            <PanelContent>
              <p>
                <Trans
                  id="auth.signin.forbiden"
                  defaults="You are not authorized. Please sign in to access this page."
                />
              </p>
              <Button onClick={auth.login}>
                <Trans id="auth.signin.loginRegister" defaults="Login or Register" />
              </Button>
            </PanelContent>
          </Panel>
        </div>
      </div>
    );
  }
}
