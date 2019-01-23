import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Banner({ imageSrc, message, button }) {
  return (
    <div className="text-center">
      <img className="w-32" src={imageSrc} />

      <span className={classNames('block text-secondary-dark text-lg font-light my-4')}>
        {message}
      </span>

      {button}
    </div>
  );
}

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  button: PropTypes.node,
};

export default Banner;
