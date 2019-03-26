import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';
import NavBar from 'pages/dashboard/components/navBar/NavBar';

export default class PrivateViews extends Component {
  static propTypes = {
    auth: object.isRequired,
  };

  state = {
    isAuthenticated: this.props.auth.isAuthenticated(),
  };

  componentDidMount() {
    const { auth } = this.props;

    auth
      .handleAuthentication()
      .then(() => {
        if (!auth.isAuthenticated()) {
          auth.login();
        }

        this.setState({
          isAuthenticated: auth.isAuthenticated(),
        });
      })
      .catch((exception) => {
        if (exception.error === 'invalid_token') {
          auth.login();
        }
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
          <div className="spinner-large" />
        </div>
      </div>
    );
  }
}
