import React from 'react';
import classNames from 'classnames/bind';
import { object, bool } from 'prop-types';
import styles from './assets/panelfooter.scss';

const cx = classNames.bind(styles);

const Footer = ({ children, classes, pullRight }) => {
  const footerClasses = cx({
    footer: true,
    [classes.footer]: classes.footer,
  });

  return (
    <section className={footerClasses}>
      <div className={pullRight ? styles.pullRight : undefined}>{children}</div>
    </section>
  );
};

Footer.propTypes = {
  classes: object,
  pullRight: bool,
};

Footer.defaultProps = {
  classes: {},
  pullRight: false,
};

export default Footer;
