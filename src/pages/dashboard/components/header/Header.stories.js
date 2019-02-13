import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';
import IllustratedMessage from '../IllustratedMessage';
import LogoSrc from './assets/logo.svg';
import Button from 'components/button/Button';

function getBanner() {
  return (
    <IllustratedMessage
      imageSrc={LogoSrc}
      message="You have 3 new mentorship messages!"
      button={
        <Button onClick={() => console.log('click')} size="small">
          open
        </Button>
      }
    />
  );
}

storiesOf('App / Header', module)
  .add('without notification', () => {
    return <Header />;
  })
  .add('with notification', () => {
    return <Header banner={getBanner()} />;
  });
