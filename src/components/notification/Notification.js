import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NOTIFICATION_TYPES = {
  mentorship: 'mentorship',
  account: 'account',
  error: 'error',
};

/**
 *
 * @param {type} props  mentorship, account, error
 * @param {title} props title string
 * @param {message} props  message string
 * @param {time} props  time string
 */
const Notification = (props) => {
  const { type, title, message, time, onClick, onClose } = props;

  let colorType;

  switch (type) {
    case NOTIFICATION_TYPES.account:
      colorType = 'primary-light';
      break;
    case NOTIFICATION_TYPES.error:
      colorType = 'danger-light';
      break;
    case NOTIFICATION_TYPES.mentorship:
    default:
      colorType = 'blue';
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        'text-left bg-white p-3 border-solid border-l-4 cursor-pointer relative',
        `border-${colorType}`,
        'transition-property-shadow transition-slow transition-timing-ease',
        'hover:shadow-md focus:shadow-md',
      )}
    >
      <h3 className="text-sm font-titles text-secondary-dark mb-2">{title}</h3>
      <p className="text-xs font-thin font-content text-black mb-2">{message}</p>
      <div className="text-right text-xs font-thin font-content text-secondary-lighter">{time}</div>

      <div
        className={classNames(
          'absolute w-8 h-8 pin-t pin-r',
          'flex items-center justify-center',
          'bg-danger-light text-white rounded-full',
          'transition-property-shadow transition-slow transition-timing-ease',
          'hover:shadow-md focus:shadow-md',
        )}
        style={{ transform: 'translate(50%, -50%)' }}
        onClick={(e) => {
          e.stopPropagation();
          onClose && onClose(e);
        }}
      >
        <FontAwesomeIcon icon={faTimes} className="w-4 h-4 fill-current" />
      </div>
    </div>
  );
};

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
