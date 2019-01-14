import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import logoSrc from './assets/logo.svg';
import Image from 'components/Image';

function TopHeader() {
  return (
    <div className="bg-gradient-primary h-48 py-5 md:py-6 md:h-64 lg:py-8">
      <div className="flex justify-between items-center w-5/6 m-auto">
        <span className="text-white text-2xl font-bold">
          <Trans id="dashboard.header.title" />
        </span>
        <Image src={logoSrc} className="w-12" alt="Logo of Coading Coach" />
      </div>
    </div>
  );
}

function Header({ banner }) {
  return (
    <React.Fragment>
      <header>
        {/* This includes the Section name and the Logo of CodingCoach */}
        <TopHeader />
      </header>

      {banner && (
        <div
          style={{ marginTop: '-6rem' }}
          className="mx-auto w-5/6 p-8 bg-white shadow md:w-3/5 xl:w-2/5"
        >
          {banner}
        </div>
      )}
    </React.Fragment>
  );
}

Header.propTypes = {
  banner: PropTypes.node,
};

export default Header;
