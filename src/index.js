import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import registerServiceWorker from 'registerServiceWorker';
// @TODO: Remove this after creating the `Button` component
import 'theme/index.scss';

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Lato', 'Fjalla One'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
