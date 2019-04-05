import React from 'react';
import { Trans } from '@lingui/macro';
import classNames from 'classnames';

import Button from 'components/button/Button';

// @TODO: Bring it back when ready
// import DonateButton from './DonateButton';

function Footer({ onClickLegal }) {
  return (
    <footer className={'w-full border-t border-secondary-lightest'}>
      <div
        className={classNames(
          'flex flex-col md:flex-row justify-center items-center sm:justify-end flex-wrap',
          'pt-4 pb-4 pr-8 pl-8 mr-16 ml-16',
        )}
      >
        {/* <div className={styles.column}>{ <DonateButton /> }</div> */}

        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('terms')}
        >
          <Trans id="footer.legal.terms" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('cookies')}
        >
          <Trans id="footer.legal.cookies" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('privacy')}
        >
          <Trans id="footer.legal.privacy" />
        </Button>
        <Button
          type="tertiary"
          typography="capitalize"
          size="small"
          onClick={() => onClickLegal('conduct')}
        >
          <Trans id="footer.legal.conduct" />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
