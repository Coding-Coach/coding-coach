import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import { string, func, oneOf, instanceOf } from 'prop-types';
import CloseIcon from 'components/icon/Close';

export const NOTIFICATION_TYPES = {
  neutral: 'neutral',
  success: 'success',
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
      case NOTIFICATION_TYPES.success:
        return 'primary-light';
      case NOTIFICATION_TYPES.error:
        return 'danger-light';
      case NOTIFICATION_TYPES.neutral:
      default:
        return 'neutral';
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
          {format(time, 'hh:mm aa')}
        </div>

        <div
          tabIndex="0"
          role="button"
          aria-label="Close"
          className={classNames(
            `${!isActive && !isCloseFocus ? 'hidden' : 'block'}`,
            'absolute w-8 h-8 pin-t pin-r rounded-full',
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
          onBlur={(e) => {
            e.stopPropagation();
            this.setState({ isFocus: false, isCloseFocus: false });
          }}
        >
          <CloseIcon title="Close Button" />
        </div>
      </div>
    );
  }
}

Notification.propTypes = {
  type: oneOf(Object.values(NOTIFICATION_TYPES)),
  title: string.isRequired,
  message: string.isRequired,
  time: instanceOf(Date).isRequired,
  onClose: func.isRequired,
  onClick: func,
};

Notification.defaultProps = {
  type: NOTIFICATION_TYPES.neutral,
};

export default Notification;
