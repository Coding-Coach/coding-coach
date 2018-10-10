import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './footer.scss';

const Footer = ({ t }) => (
  <footer className={styles.footerMain}>
    <div className={styles.footerInner}>
      <a href="#terms" className={styles.footerLink}>
        {t('footer-terms')}
      </a>
      <a href="#cookies" className={styles.footerLink}>
        {t('footer-cookies')}
      </a>
      <a href="#privacy" className={styles.footerLink}>
        {t('footer-privacy')}
      </a>
    </div>
  </footer>
);

export default translate('translations')(Footer);
