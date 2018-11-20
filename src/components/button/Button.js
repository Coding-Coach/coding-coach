import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 *
 * @param {children} props
 * @param {type} props  primary, danger, secondary
 * @param {size} props  small, medium, large,
 * @param {disabled} props  true, false
 * @param {fullWidth} props Button width is 100% of parent
 * @param {typography} props capitalize, uppercase, lowercase, only
 */
const Button = (props) => {
  const { children, type, size, shape, typography, disabled, fullWidth, id, onClick } = props;

  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
        styles[shape],
        fullWidth && styles.fullWidth,
        styles[typography] || styles.uppercase,
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled', 'danger']),
  typography: PropTypes.oneOf(['uppercase', 'capitalize', 'lowercase', 'none']),
  shape: PropTypes.oneOf(['square', 'rounded', 'pill']),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  typography: 'uppercase',
  shape: 'rounded',
};

export default Button;
