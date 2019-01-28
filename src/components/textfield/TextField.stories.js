import React, { Component, Fragment } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import TextField from './TextField';

class TextInputExample extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <TextField {...this.props} onChange={(ev) => this.setState({ value: ev.target.value })} />
    );
  }
}

storiesOf('Components/TextField', module)
  .addDecorator((storyFn) => (
    <div style={{ width: 300, maxWidth: '50vw', padding: 20 }}>{storyFn()}</div>
  ))

  .add('Text Input', () => (
    <Fragment>
      <TextInputExample label="Name" />
      <TextInputExample label="Email" type="email" />
      <TextInputExample label="Password" type="password" />
    </Fragment>
  ))

  .add('Text Input w/ Error', () => <TextInputExample label="Error" error="There is an error." />);
