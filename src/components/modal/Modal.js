import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.scss';

class Modal extends React.Component {
  static CLASS_OVERFLOW_HIDDEN = 'u-overflowHidden';

  constructor(props) {
    super(props);
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }

  componentDidMount() {
    document.body.classList.add(Modal.CLASS_OVERFLOW_HIDDEN);
  }

  componentWillUnmount() {
    document.body.classList.remove(Modal.CLASS_OVERFLOW_HIDDEN);
    document.body.removeChild(this.modal);
  }

  render() {
    return ReactDOM.createPortal(this._renderModal(), this.modal);
  }

  _renderModal() {
    const { onClose } = this.props;

    return (
      <div className={styles.modal} onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className={styles.innerModal}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
