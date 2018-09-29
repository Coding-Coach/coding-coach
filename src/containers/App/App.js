import React from 'react';
import { func } from 'prop-types';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './assets/app.scss';
import Home from 'pages/Home/Home';

export function App({ t }) {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

App.propTypes = {
  t: func,
};

// App.defaultProps = {
//   t: () => true,
// };

export default translate('translations')(App);
