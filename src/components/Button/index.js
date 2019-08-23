import React from 'react';
import { any, func, string } from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

const Button = React.memo(({ children, className, to, onClick }) => {
  const css = classNames('inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark', className);

  if (to) {
    if (to.startsWith('http')) {
      return (
        <a href={to} className={css}>{children}</a>
      );
    }

    return (
      <Link to={to} className={css}>{children}</Link>
    );
  }

  return (
    <button onClick={onClick} className={css}>{children}</button>
  );
});

Button.propTypes = {
  children: any,
  className: string,
  onClick: func,
};

export default Button;
