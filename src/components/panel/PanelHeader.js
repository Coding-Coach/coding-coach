import React from 'react';
import classNames from 'classnames/bind';
import { object } from 'prop-types';
import styles from './assets/panelheader.scss';

const cx = classNames.bind(styles);
console.log(styles);

const Header = ({ children, classes }) => (
  <header className={styles.header}>
    <h2
      className={cx({
        heading: true,
        [classes.title]: classes.title,
      })}
    >
      {children}
    </h2>
  </header>
);

Header.propTypes = {
  classes: object,
};

Header.defaultProps = {
  classes: {},
};

export default Header;
