import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import logoSrc from './assets/logo.svg';

function TopHeader() {
  return (
    <div className={classNames('bg-gradient-primary h-48 p-5', 'md:p-6 md:h-64 lg:p-8')}>
      <div className="flex justify-between items-center">
        <span className={classNames('text-white text-2xl font-bold')}>
          <Trans id="dashboard.header.title" />
        </span>
        <img src={logoSrc} className="w-12" />
      </div>
    </div>
  );
}
function Header({ banner }) {
  return (
    <header>
      <TopHeader />

      {banner && (
        <div
          className={classNames('bg-white p-8 shadow')}
          style={{ width: '80%', margin: '-100px auto 0 auto' }}
        >
          {banner}
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  banner: PropTypes.node,
};

export default Header;
