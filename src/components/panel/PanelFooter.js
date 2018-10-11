import React from 'react';
import classNames from 'classnames/bind';
import { object } from 'prop-types';
import styles from './assets/panelfooter.scss';

const cx = classNames.bind(styles);

const Footer = ({ children, classes }) => {
  const footerClasses = cx({
    footer: true,
    [classes.footer]: classes.footer,
  });

  return (
    <section className={footerClasses}>
      <div className={styles.pullRight}>{children}</div>
    </section>
  );
};

Footer.propTypes = {
  classes: object,
};

Footer.defaultProps = {
  classes: {},
};

export default Footer;
