import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '../Image';

storiesOf('Components/Image', module).add('Basic Image', () => {
  return (
    <React.Fragment>
      <Image
        src="https://s3.amazonaws.com/quizzpot/images/280-meeting.svg"
        alt="Bear teaching some awesome concepts"
      />
      <Image
        src="https://s3.amazonaws.com/quizzpot/images/280-meeting-404.svg"
        alt="Image not found!"
      />
    </React.Fragment>
  );
});
