import React from 'react';
import styles from './button.scss';
import classNames from 'classnames';
/**
 *
 * @param {children} props
 * @param {type} props  primary, danger, secondary
 * @param {size} props  default, large, small,
 * @param {disabled} props  true, false
 * @param {fullWidth} props Button width is 100% of parent
 */
const Button = (props) => {
  const { children, type, size, disabled, fullWidth, ...rest } = props;
  const classes = classNames(
    styles.button,
    styles[type] || styles.primary,
    styles[size] || styles.default,
    fullWidth && styles.fullWidth,
  );
  return (
    <button disabled={disabled} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
