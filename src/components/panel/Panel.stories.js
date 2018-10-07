import React from 'react';
import { storiesOf } from '@storybook/react';

import Panel from './Panel';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

storiesOf('Panel Component', module).add('Panel', () => {
  const onClose = () => {
    alert('closed');
  };

  const closeModal = () => {
    open = false;
  };
  let open = false;
  const classes = {
    root: 'dummyRoot',
    body: 'dummyBody',
  };

  return (
    <Panel
      trigger={<Button text="Open Modal" />}
      closable={true}
      modal={true}
      onClose={onClose}
      classes={classes}
      open={open}
    >
      <Panel.Header>Hello World!</Panel.Header>
      <Panel.Content>Some random content</Panel.Content>
      <Panel.Footer>
        <Button text="Deny" onClick={closeModal} />
        <Button text="Accept" onClick={closeModal} />
      </Panel.Footer>
    </Panel>
  );
});

storiesOf('Panel Component with external close control', module).add('Panel', () => {
  class DummyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
      this.closeModalHandler = this.closeModalHandler.bind(this);
    }

    closeModalHandler() {
      this.setState({ open: false });
    }

    render() {
      return (
        <Panel
          trigger={<Button text="Open Modal" />}
          closable={true}
          modal={true}
          open={this.state.open}
        >
          <Panel.Header>Hello World!</Panel.Header>
          <Panel.Content>Some random content</Panel.Content>
          <Panel.Footer>
            <Button text="Deny" onClick={this.closeModalHandler} />
            <Button text="Accept" onClick={this.closeModalHandler} />
          </Panel.Footer>
        </Panel>
      );
    }
  }

  return <DummyComponent />;
});
