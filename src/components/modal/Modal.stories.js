import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

class ModalExperiment extends React.Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleModal}>this toggles the modal</button>
        {this.state.showModal && <Modal onClose={this.toggleModal}>{this.props.children}</Modal>}
      </React.Fragment>
    );
  }
}

storiesOf('Components/Modal', module)
  .add('renders a modal with content', () => {
    return (
      <ModalExperiment>
        <button onClick={this.toggleModal}>this toggles the modal</button>
      </ModalExperiment>
    );
  })
  .add('renders a modal with an image', () => {
    return (
      <ModalExperiment>
        <img src="http://addplaybuttontoimage.way4info.net/Images/Icons/14.png" />
      </ModalExperiment>
    );
  });
