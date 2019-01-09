import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
        className={classNames(
          'fixed pin w-full h-full bg-modal',
          'flex items-center justify-center',
        )}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={classNames(
            'relative pt-10 pb-10 pl-5 pr-5',
            `w-full h-full`,
            'md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl',
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
