import React from 'react';
import { func } from 'prop-types';
import { translate } from 'react-i18next';
import { Router } from '@reach/router';
import { Home } from 'pages';
import 'i18n/i18n';

const App = ({ t }) => {
  return (
    <React.Fragment>
      <Router>
        <Home path="/" />
      </Router>
    </React.Fragment>
  );
};

App.propTypes = {
  t: func,
};

export default translate('translations')(App);
