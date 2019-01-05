import React from 'react';
import { Trans } from '@lingui/macro';
import classNames from 'classnames';

import Button from 'components/button/Button';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';
import styles from './footer.module.scss';

//classNames('flex justify-end flex-col items-center border-t border-solid border-secondary-lightest md:flex-row md:ml-1.9375rem md:mr-1.9375rem ')

function Footer({ onClickLegal, t }) {
  return (
    <footer className={classNames(`w-full`)}>
      <div
        className={classNames(
          'flex justify-end ml-auto mr-auto pl-8 pr-8 flex-col items-center border-t border-solid border-secondary-lightest md:flex-row md:ml-1.9375rem md:mr-1.9375rem ',
        )}
      >
        <div className={classNames('md:flex-1 ')}>{/* <DonateButton /> */}</div>

        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('terms')}
          className={classNames(
            'inline-block p-3 text-xs secondary-lighter no-underline hover:secondary-dark',
          )}
        >
          <Trans id="footer.legal.terms" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('cookies')}
          className={classNames(
            'inline-block p-3 text-xs secondary-lighter no-underline hover:secondary-dark',
          )}
        >
          <Trans id="footer.legal.cookies" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('privacy')}
          className={classNames(
            'inline-block p-3 text-xs secondary-lighter no-underline hover:secondary-dark',
          )}
        >
          <Trans id="footer.legal.privacy" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
