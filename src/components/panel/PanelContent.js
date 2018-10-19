import React from 'react';
import { object } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/panelcontent.scss';

const cx = classNames.bind(styles);

const Content = ({ children, classes }) => {
  const contentClasses = cx({
    mainContent: true,
    [classes.content]: classes.content,
  });
  return (
    <section id="content-section" className={contentClasses}>
      {children}
    </section>
  );
};

Content.propTypes = {
  classes: object,
};

Content.defaultProps = {
  classes: {},
};

export default Content;
