import React from 'react';
import { Trans } from '@lingui/macro';

import Button from 'components/button/Button';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';

function Footer({ onClickLegal, t }) {
  const buttonClasses =
    'inline-block p-1 text-xs secondary-lighter no-underline hover:secondary-dark';

  return (
    <footer className="container">
      <div className="flex justify-end ml-auto mr-auto pl-8 pr-8 pt-4 pb-4 flex-col items-center border-t border-solid border-secondary-lightest md:flex-row md:ml-1.9375rem md:mr-1.9375rem">
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('terms')}
          className={buttonClasses}
        >
          <Trans id="footer.legal.terms" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('cookies')}
          className={buttonClasses}
        >
          <Trans id="footer.legal.cookies" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('privacy')}
          className={buttonClasses}
        >
          <Trans id="footer.legal.privacy" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
