import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/Close';

const NOTIFICATION_TYPES = {
  mentorship: 'mentorship',
  account: 'account',
  error: 'error',
};

class Notification extends React.Component {
  state = {
    isHover: false,
    isFocus: false,
    isCloseFocus: false,
  };

  getColorType(type) {
    switch (type) {
      case NOTIFICATION_TYPES.account:
        return 'primary-light';
      case NOTIFICATION_TYPES.error:
        return 'danger-light';
      case NOTIFICATION_TYPES.mentorship:
      default:
        return 'blue';
    }
  }

  toggleActive = (value) => () => {
    this.setState((prev) => ({ [value]: !prev[value] }));
  };

  onKeyDown = (fn) => (e) => {
    // space || enter
    if (e.which === 13 || e.which === 32) {
      e.preventDefault();
      fn && fn(e);
    }
  };

  render() {
    const { type, title, message, time, onClick, onClose } = this.props;
    const { isHover, isFocus, isCloseFocus } = this.state;

    const isActive = isHover || isFocus;

    const colorType = this.getColorType(type);

    return (
      <div
        tabIndex="0"
        className={classNames(
          'text-left bg-white p-3 cursor-pointer relative',
          `border-solid border-l-4 border-${colorType}`,
          'transition-property-shadow transition-slow transition-timing-ease',
          'hover:shadow-md focus:shadow-md focus:outline-none',
        )}
        onClick={onClick}
        onKeyDown={this.onKeyDown(onClick)}
        onMouseEnter={this.toggleActive('isHover')}
        onMouseLeave={this.toggleActive('isHover')}
        onFocus={this.toggleActive('isFocus')}
        onBlur={(e) => {
          if (!e.relatedTarget || !e.relatedTarget.getAttribute('aria-label') === 'Close') {
            this.toggleActive('isFocus')(e);
          }
        }}
      >
        <h3 className="text-sm font-titles text-secondary-dark mb-2">{title}</h3>
        <p className="text-xs font-thin font-content text-black mb-2">{message}</p>
        <div className="text-right text-xs font-thin font-content text-secondary-lighter">
          {time}
        </div>

        <div
          tabIndex="0"
          role="button"
          aria-label="Close"
          className={classNames(
            `${!isActive && !isCloseFocus ? 'hidden' : 'flex'}`,
            'items-center justify-center',
            'absolute w-8 h-8 pin-t pin-r',
            'bg-danger-light text-white rounded-full',
            'transition-property-shadow transition-slow transition-timing-ease',
            'hover:shadow-md focus:shadow-md',
          )}
          style={{ transform: 'translate(50%, -50%)' }}
          onClick={(e) => {
            e.stopPropagation();
            onClose && onClose(e);
          }}
          onKeyDown={this.onKeyDown(onClose)}
          onFocus={this.toggleActive('isCloseFocus')}
          onBlur={this.toggleActive('isCloseFocus')}
        >
          <CloseIcon title="Close Button" />
        </div>
      </div>
    );
  }
}

Notification.propTypes = {
  type: PropTypes.oneOf(Object.values(NOTIFICATION_TYPES)),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

Notification.defaultProps = {
  type: 'primary',
};

export default Notification;
