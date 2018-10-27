import React from 'react';
import classNames from 'classnames/bind';
import { object, bool } from 'prop-types';
import styles from './assets/panelFooter.scss';

const cx = classNames.bind(styles);

const Footer = ({ children, classes }) => (
  <footer
    className={cx({
      footer: true,
      [classes.footer]: classes.footer,
    })}
  >
    {children}
  </footer>
);

Footer.propTypes = {
  classes: object,
  pullRight: bool,
};

Footer.defaultProps = {
  classes: {},
};

export default Footer;
