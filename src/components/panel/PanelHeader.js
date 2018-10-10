import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './assets/panelheader.scss';

const cx = classNames.bind(styles);

const Header = ({ children, ...restProps }) => {
  const classes = restProps.classes || {};

  const headingClasses = cx({
    heading: true,
    [classes.title]: classes.title,
  });
  return <h2 className={headingClasses}>{children}</h2>;
};

Header.propTypes = {
  classes: PropTypes.object,
};

export default Header;
