import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './assets/app.scss';

export function App({ t }) {
  return (
    <div className={styles.app}>
      <img src={require('./mentor.jpg')} alt="Mentor" className={styles.image} />
      <header className={styles.header}>
        <h1 className={styles.title}>{t('landing-page-header')}</h1>
        <h4 className={styles.tagline}>{t('landing-page-subheader')}</h4>
        {/* TODO: create a React Component for a `Button` and add scoped styles */}
        <a
          className="button button__white--fill button__link"
          href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('landing-page-start')}
        </a>
      </header>
    </div>
  );
}

export default translate('translations')(App);
