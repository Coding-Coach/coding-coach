import React from 'react';
import { Trans } from '@lingui/macro';

import Button from 'components/button/Button';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';
import styles from './footer.module.scss';

function Footer({ onClickLegal, t }) {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        <div className={styles.column}>{/* <DonateButton /> */}</div>

        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('terms')}
          className={styles.footerLink}
        >
          <Trans id="footer.legal.terms" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('cookies')}
          className={styles.footerLink}
        >
          <Trans id="footer.legal.cookies" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('privacy')}
          className={styles.footerLink}
        >
          <Trans id="footer.legal.privacy" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
