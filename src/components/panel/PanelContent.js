import React from 'react';
import { object } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './assets/panelContent.scss';

const cx = classNames.bind(styles);

const Content = ({ children, classes }) => (
  <div
    id="content-section"
    className={cx({
      mainContent: true,
      [classes.content]: classes.content,
    })}
  >
    {children}
  </div>
);

Content.propTypes = {
  classes: object,
};

Content.defaultProps = {
  classes: {},
};

export default Content;
