import React, { Component } from 'react';
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/macro';
import classNames from 'classnames';
import Button from 'components/button/Button';

class OverlayCookie extends Component {
  state = {
    cookiesAccepted: 'false',
  };

  static propTypes = {
    onReadMore: func.isRequired,
  };

  acceptCookies = () => {
    if (!localStorage.getItem('codingCoachCookies')) {
      localStorage.setItem('codingCoachCookies', true);
    }
    this.setState({ cookiesAccepted: true });
  };

  checkCookiePermission = () => {
    const hasCookiePermission = localStorage.getItem('codingCoachCookies');
    if (hasCookiePermission) this.acceptCookies();
  };

  //this is needed to avoid a server-side error about localStorage not being
  //defined (localStorage only exists in the browser)
  checkLocalStorage = () => {
    if (typeof window.localStorage !== 'undefined') return window.localStorage;
    else if (typeof localStorage !== 'undefined') return localStorage;
    else return false;
  };

  componentDidMount() {
    this.checkLocalStorage() && this.checkCookiePermission();
  }

  render() {
    const { cookiesAccepted } = this.state;
    const { onReadMore } = this.props;

    if (cookiesAccepted === true) return null;

    return (
      <section className="fixed w-full pin-b bg-primary-lighter" style={{ opacity: 0.9 }}>
        <div
          className={classNames(
            'flex justify-between text-xs text-secondary-dark',
            'mx-auto px-8 container',
          )}
        >
          <p className="leading-normal my-4 ml-1">
            <Trans id="legal.notification">
              <span>
                <Button
                  size="small"
                  type="tertiary"
                  typography="capitalize"
                  onClick={() => onReadMore('cookies')}
                >
                  Cookies Policy
                </Button>
              </span>
            </Trans>
          </p>
          <p className="text-right my-4">
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faTimes}
              onClick={this.acceptCookies}
            />
          </p>
        </div>
      </section>
    );
  }
}

export default OverlayCookie;
