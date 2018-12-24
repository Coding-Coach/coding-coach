import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import Header from './components/Header';
import Button from 'components/button/Button';

const Banner = () => (
  <Fragment>
    <button>image</button>
    <span className="block">This is the message that says someting</span>
    <Button onClick={() => console.log('click')} size="small" typography="none">
      Click me
    </Button>
  </Fragment>
);

class Home extends Component {
  render() {
    return <Header banner={<Banner />} />;
  }
}

export default Home;
