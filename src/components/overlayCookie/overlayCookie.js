import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './overlayCookie.scss';

const OverlayCookie = ({ t }) => {
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
            icon={faTimes} />
        </p>
      </div>
    </section>
  );
};

export default translate('translations')(OverlayCookie);
