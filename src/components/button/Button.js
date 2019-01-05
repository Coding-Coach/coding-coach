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
 * @param {floating} props Adds a shadow under the button
 * @param {className} props Add custom classes to the button
 */
const Button = (props) => {
  const {
    children,
    floating,
    type,
    size,
    shape,
    typography,
    disabled,
    fullWidth,
    id,
    onClick,
    className,
  } = props;

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
        floating && styles.shadow,
        styles[typography] || styles.uppercase,
        className,
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
  floating: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  typography: 'uppercase',
  shape: 'rounded',
  floating: false,
};

export default Button;
