import React from 'react';
import { I18n } from 'react-i18next';
import '../../i18n/i18n';
import './contact.scss';
import peopleSearch from './people-search.svg';

const Contact = (props) => {
  return (
    <I18n ns="translations">
      {t => (
        <section className="App__Contact">
          <div className="App__LeftSection">
            <img src={peopleSearch} className="App-poepleSearch" alt="people search logo" />
          </div>
          <div className="App__RightSection">
            <h1>{t('contact-page-header')}</h1>
            <p>{t('contact-page-msg')}</p>
          </div>
        </section>
      )}
    </I18n>
  );
};

export default Contact;