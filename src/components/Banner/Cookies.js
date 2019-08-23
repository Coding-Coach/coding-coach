import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Banner from './index';
import { isLocalStorageSuported } from '../../utils/localstorage';

const COOKIES_NAME = 'codingCoachCookies';

export default class Cookies extends PureComponent{
  state = {
    accepted: true,
  };

  componentWillMount() {
    let accepted = false;

    if (isLocalStorageSuported()) {
      accepted = !!localStorage.getItem(COOKIES_NAME);
    }

    this.setState({ accepted });
  }

  toggleAccepted = () => {
    this.setState((current) => {
      const accepted = !current.accepted;

      localStorage.setItem(COOKIES_NAME, accepted);
      return {
        accepted,
      };
    });
  }

  render() {
    const { accepted } = this.state;

    if (accepted) {
      return null;
    }

    return (
      <Banner closable onClose={this.toggleAccepted}>
        <p className="text-xs text-secondary-dark">
          To help personalize content, tailor and measure ads, and provide a safer experience, we use cookies.
          By clicking or navigating the site, you agree to allow our collection of information on and off Coding Coach through cookies.
          Learn more, including about available controls <Link to="/legal/cookies" className="text-primary-dark hover:underline hover:text-primary-light">Cookies Policy</Link>
        </p>
      </Banner>
    );
  }
}
