import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './overlayCookie.scss';

const OverlayCookie = ({ t }) => {
  return (
    <section id="overlayCookie">
      <p>
        {t('cookie-notification')}
        <span>
          <a href="#cookies">{t('cookie-link')}</a>
        </span>
      </p>
    </section>
  );
};

export default translate('translations')(OverlayCookie);
