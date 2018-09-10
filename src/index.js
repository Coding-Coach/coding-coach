import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n/i18n";
import registerServiceWorker from './registerServiceWorker';

import './styles/css/index.css';

ReactDOM.render(<I18nextProvider i18n={i18n}>
                    <App />
                </I18nextProvider>,
                document.getElementById('root'));
registerServiceWorker();
