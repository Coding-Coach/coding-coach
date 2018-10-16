import React, { Component } from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './overlayCookie.scss';

class OverlayCookie extends Component {
  state = {
    cookiesAccepted: 'false',
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
    const { t } = this.props;

    if (cookiesAccepted === true) return null;

    return (
      <section className={styles.cookieWrapper}>
        <div className={styles.cookieContent}>
          <p className={styles.cookieText}>
            {t('cookie-notification') + ' '}
            <span>
              <a href="#cookies">{t('cookie-link')}</a>
            </span>
          </p>
          <p className={styles.cookieIcon}>
            <FontAwesomeIcon icon={faTimes} onClick={this.acceptCookies} />
            <FontAwesomeIcon icon={faTimes} onClick={this.acceptCookies} />
          </p>
        </div>
      </section>
    );
  }
}

export default translate('translations')(OverlayCookie);
