import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import registerServiceWorker from 'registerServiceWorker';
// @TODO: Remove this after creating the `Button` component
import 'theme/index.scss';

var WebFont = require('webfontloader');

(() => {
  if (window.sessionStorage.getItem('fonts')) {
    console.log('Fonts already installed');
    document.documentElement.classList.add('wf-active');
  }
})();

WebFont.load({
  google: {
    families: ['Lato', 'Fjalla One'],
  },
  timeout: 2000,
  active: () => {
    window.sessionStorage.setItem('fonts', true);
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
