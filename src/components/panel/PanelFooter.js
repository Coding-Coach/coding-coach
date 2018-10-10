import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './assets/panelfooter.scss';

const cx = classNames.bind(styles);

const Footer = ({ children, ...restProps }) => {
  const classes = restProps.classes || {};

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

export default Footer;
