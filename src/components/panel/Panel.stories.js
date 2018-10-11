import React from 'react';
import { storiesOf } from '@storybook/react';

import Panel from './Panel';
import styles from './assets/panelstories.scss';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

storiesOf('Components/Panel', module)
  .add('Basic Panel', () => {
    const onClose = () => {
      alert('onClose callback is called');
    };

    const closeModal = () => {
      open = false;
    };
    let open = false;
    const classes = {
      root: 'dummyRoot',
      body: styles.dummyBody,
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
        <Panel.Content>
          <p>Click close icon on top right-hand side to close the modal window</p>
          <p>No event handler is attached to Deny and Close buttons</p>
          <p>
            The default width of the panel-wrapper is 40%. The width can be changed via css. Its set
            to 80% in thsi case.
          </p>
        </Panel.Content>
        <Panel.Footer>
          <Button text="Deny" onClick={closeModal} />
          <Button text="Accept" onClick={closeModal} />
        </Panel.Footer>
      </Panel>
    );
  })
  .add('Panel with functional Footer', () => {
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
            <Panel.Content>
              <p>To close the modal, use any of the buttons/actions</p>
            </Panel.Content>
            <Panel.Footer>
              <Button text="Deny" onClick={this.closeModalHandler} />
              <Button text="Accept" onClick={this.closeModalHandler} />
            </Panel.Footer>
          </Panel>
        );
      }
    }

    return <DummyComponent />;
  })
  .add('Panel without trigger prop', () => {
    class DummyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = { open: false };
        this.closeModalHandler = (e) => this.setState({ open: false });
        this.triggerHandler = (e) => {
          alert('onTrigger handler called before opening the modal');
          this.setState({ open: true });
        };
      }

      render() {
        return (
          <React.Fragment>
            <Button text="Open Modal" onClick={this.triggerHandler} />
            <Panel closable={true} modal={true} open={this.state.open}>
              <Panel.Header>Hello World!</Panel.Header>
              <Panel.Content>
                <p>
                  Trigger is not mandatory. If you have to do some processing before opening the
                  modal/popup, then handle it seperately and then set open to `true`
                </p>
              </Panel.Content>
              <Panel.Footer>
                <Button text="Deny" onClick={this.closeModalHandler} />
                <Button text="Accept" onClick={this.closeModalHandler} />
              </Panel.Footer>
            </Panel>
          </React.Fragment>
        );
      }
    }

    return <DummyComponent />;
  });
