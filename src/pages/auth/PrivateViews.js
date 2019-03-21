import React, { Component, Fragment } from 'react';
import { object } from 'prop-types';
import NavBar from 'pages/dashboard/components/navBar/NavBar';
import Button from 'components/button/Button';

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
      <div>
        <p>I'm sorry but you can't be here</p>
        <Button onClick={auth.login}>Login</Button>
      </div>
    );
  }
}
