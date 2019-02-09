import React from 'react';
import PropTypes from 'prop-types';

function Banner({ icon, message, button }) {
  return (
    <div className="text-center">
      {icon}
      <span className={'block text-secondary-dark text-lg font-light mb-4'}>{message}</span>
      {button}
    </div>
  );
}

Banner.propTypes = {
  icon: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  button: PropTypes.node,
};

export default Banner;
