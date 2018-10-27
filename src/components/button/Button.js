import React from 'react';
import styles from './button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 *
 * @param {children} props
 * @param {type} props  primary, danger, secondary
 * @param {size} props  default, large, small,
 * @param {disabled} props  true, false
 * @param {fullWidth} props Button width is 100% of parent
 */
const Button = (props) => {
  const { children, type, size, disabled, fullWidth, id, onClick } = props;
  const classes = classNames(
    styles.button,
    styles[type] || styles.primary,
    styles[size] || styles.default,
    fullWidth && styles.fullWidth,
  );
  return (
    <button id={id} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Button;
