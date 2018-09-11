import React, { Component } from 'react';
import { I18n } from "react-i18next";
import "./i18n/i18n";


class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t) => {
            return(
              <div className="App">
                <img 
                  src={require('./images/mentor.jpg')} 
                  alt="Mentor" 
                  className="App__background-image"
                />
                <header className="App__header">
                  <h1 className="App__title">{t("landing-page-header")}</h1>
                  <h4 className="App__tagline">{t("landing-page-subheader")}</h4>
                  <button className="button button__white--fill">
                    <a 
                      href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
                      target="blank"
                      className="button__link"
                    >
                      {t("landing-page-start")}
                    </a>
                  </button>
                </header>
              </div>
            )
          } 
        }
      </I18n>
    );
  }
}

export default App;
