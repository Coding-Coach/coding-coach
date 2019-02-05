import React, { Component, Fragment } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import TextField from './TextField';

storiesOf('Components/TextField', module)
  .addDecorator((storyFn) => (
    <div style={{ width: 300, maxWidth: '50vw', padding: 20 }}>{storyFn()}</div>
  ))

  .add('Text Input', () => (
    <Fragment>
      <TextField label="Name" />
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
    </Fragment>
  ))

  .add('Text Input w/ Error', () => <TextField label="Error" error="There is an error." />);
