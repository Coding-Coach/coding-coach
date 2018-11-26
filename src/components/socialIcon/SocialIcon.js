import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import classNames from 'classnames';
=======
>>>>>>> Added Github Icon to SocialMedia Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 *
 * @param {icon} props
 * @param {href} props
 * @param {size} props
 */
const SocialIcon = (props) => {
<<<<<<< HEAD
  const { icon, href, size, className } = props;

  return (
    <div
      className={classNames(
        className,
        'group m-3 p-4 rounded-full border border-solid border-primary-light cursor-pointer  hover:bg-primary-light transition transition-fast transition-property-all transition-timing-linear',
      )}
    >
=======
  const { icon, href, size } = props;

  return (
    <div className="group m-3 p-4 rounded-full border border-solid border-primary-light cursor-pointer  hover:bg-primary-light transition transition-fast transition-property-all transition-timing-linear">
>>>>>>> Added Github Icon to SocialMedia Component
      <a target="_blank" href={href} rel="noreferrer noopener">
        <FontAwesomeIcon
          icon={icon}
          size={size}
          className="text-primary-light group-hover:text-white transition transition-fast transition-property-all transition-timing-linear"
        />
      </a>
    </div>
  );
};

SocialIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']),
};

SocialIcon.defaultProps = {
  size: '2x',
};

export default SocialIcon;
