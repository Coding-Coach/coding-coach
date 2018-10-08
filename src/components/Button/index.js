import React from 'react';
import styles from './button.scss';
import classNames from 'classnames';
console.log(styles);

/**
 *
 * @param {children} props
 * @param {type} props  primary, danger, secondary
 * @param {size} props  default, large, small, xsmall
 * @param {disabled} props  true, false
 * @param {className} props  Custom Class
 * @param {fullWidth} props Button width is 100% of parent
 */
const Button = (props) => {
  const { children, type, size, disabled, className, fullWidth, ...rest } = props;
  console.log(props);
  const classes = classNames(
    styles.button,
    styles[type] || styles.primary,
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );
  return (
    <button disabled={disabled} {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
