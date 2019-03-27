import React from 'react';
import { Trans } from '@lingui/macro';

import Button from 'components/button/Button';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';
import styles from './footer.module.scss';

function Footer({ onClickLegal, t }) {
  return (
    <footer className={'w-full'}>
      <div
        className={
          'flex justify-end items-center border-t border-secondary-lightest pt-4 pb-4 pr-24 pl-8 ml-auto mr-auto max-w-4xl'
        }
      >
        {/* TODO: make responsive */}
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
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('conduct')}
          className={styles.footerLink}
        >
          <Trans id="footer.legal.conduct" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
