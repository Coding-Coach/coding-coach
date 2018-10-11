import React, { Component } from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './overlayCookie.scss';

class OverlayCookie extends Component {
  state = {
    cookiesAccepted: 'false'
  };

  componentDidMount(){
    this.checkCookiePermission();
  }

  render() {
    const { cookiesAccepted } = this.state;
    const { t } = this.props;

    if(cookiesAccepted === true) return null;

    return (
      <section id={styles.cookieWrapper}>
        <div className={styles.cookieContent}>
          <p className={styles.cookieText}>
            {t('cookie-notification') + " "}
            <span>
              <a href="#cookies">{t('cookie-link')}</a>
            </span>
          </p>
          <p className={styles.cookieIcon}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={this.acceptCookies}
              />
          </p>
        </div>
      </section>
    );
  }

  acceptCookies = () => {
    if(!localStorage.getItem('codingCoachCookies')) {
      localStorage.setItem('codingCoachCookies', true);
    }
    this.setState({ cookiesAccepted: true });
  }

  checkCookiePermission = () => {
    const hasCookiePermission = localStorage.getItem('codingCoachCookies')
    if(hasCookiePermission) this.acceptCookies()
  }
};

export default translate('translations')(OverlayCookie);
