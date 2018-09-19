import React from 'react';
import { I18n } from 'react-i18next';
import './i18n/i18n';
import Contact from './components/contact/Contact';

function App() {
  return (
    <I18n ns="translations">
      {t => (
        <div className="App">
          <section className="App__hero">
            <header className="App__header">
              <h1 className="App__title">{t('landing-page-header')}</h1>
              <h4 className="App__tagline">{t('landing-page-subheader')}</h4>
              <a
                className="button button__white--fill button__link"
                href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </header>
            <Contact />
          </section>
        </div>
      )}
    </I18n>
  );
}

export default App;
