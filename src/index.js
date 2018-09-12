import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from 'registerServiceWorker';
// @TODO: Remove this after creating the `Button` component
import 'theme/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
