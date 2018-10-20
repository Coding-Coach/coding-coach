import React from 'react';
import classNames from 'classnames/bind';
import { object } from 'prop-types';
import styles from './panelheader.scss';

const cx = classNames.bind(styles);

const Header = ({ children, classes }) => {
  const headingClasses = cx({
    heading: true,
    [classes.title]: classes.title,
  });
  return <h2 className={headingClasses}>{children}</h2>;
};

Header.propTypes = {
  classes: object,
};

Header.defaultProps = {
  classes: {},
};

export default Header;
