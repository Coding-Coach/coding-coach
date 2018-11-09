import React from 'react';
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
          onClick={() => onClickLegal('terms-and-conditions')}
          className={styles.footerLink}
        >
          {'legal-terms-and-conditions'}
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('cookies')}
          className={styles.footerLink}
        >
          {'legal-cookies'}
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('privacy-policy')}
          className={styles.footerLink}
        >
          {'legal-privacy-policy'}
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
