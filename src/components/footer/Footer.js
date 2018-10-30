import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';
import styles from './footer.scss';

function Footer({ onClickLegal, t }) {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        <div className={styles.column}>{/* <DonateButton /> */}</div>

        <a
          onClick={() => onClickLegal('terms-and-conditions')}
          href={'#terms'}
          className={styles.footerLink}
        >
          {t('legal-terms-and-conditions')}
        </a>
        <a onClick={() => onClickLegal('cookies')} href={'#cookies'} className={styles.footerLink}>
          {t('legal-cookies')}
        </a>
        <a
          onClick={() => onClickLegal('privacy-policy')}
          href={'#privacy'}
          className={styles.footerLink}
        >
          {t('legal-privacy-policy')}
        </a>
      </div>
    </footer>
  );
}

export default translate('translations')(Footer);
