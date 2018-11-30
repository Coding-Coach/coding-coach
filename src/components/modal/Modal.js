import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }

  render() {
    return ReactDOM.createPortal(this._renderModal(), this.modal);
  }

  _renderModal() {
    const { onClose } = this.props;

    return (
      <div
        className={`${
          styles.modal
        } fixed pin w-full h-full flex items-center justify-center bg-grey-dark`}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles.innerModal} relative w-full h-full pt-10 pb-10 pl-5 pr-5`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
