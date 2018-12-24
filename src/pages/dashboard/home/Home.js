import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

const Header = () => {
  return (
    <header>
      <div
        className={classNames(
          'bg-gradient-primary h-48 p-5 flex justify-between items-start',
          'md:p-6 md:h-64 lg:p-8',
        )}
      >
        <span className={classNames('text-white text-2xl font-bold')}>Dashboard</span>
        <button>This is the logo</button>
      </div>

      <div>message</div>
    </header>
  );
};

class Home extends Component {
  render() {
    return <Header />;
  }
}

export default Home;
