import React from 'react';
import { hydrate, render } from 'react-dom';
import App from 'containers/App/App';
import registerServiceWorker from 'registerServiceWorker';
// @TODO: Remove this after creating the `Button` component
import 'theme/index.scss';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

registerServiceWorker();
