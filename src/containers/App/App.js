import React from 'react';
import { Router } from '@reach/router';
import { Home } from 'pages';
import { I18nProvider } from '@lingui/react';
// import catalogEn from '../../config/i18n/en/messages.json';
// import catalogFr from '../../config/i18n/fr/messages.json';
export class App extends React.Component {
  // state = {
  //   catalogs: {},
  //   language: 'en',
  // };

  // loadCatalog = async (language) => {
  //   const catalog = await import(`config/i18n/${language}/messages.json`);

  //   this.setState((state) => ({
  //     catalogs: {
  //       ...state.catalogs,
  //       [language]: catalog,
  //     },
  //   }));
  // };

  componentDidMount() {
    this.loadCatalog(this.state.language);
  }
  render() {
    const { language, catalogs } = this.state;

    return (
      <I18nProvider language={language} catalogs={catalogs}>
        <Router>
          <Home path="/" />
        </Router>
      </I18nProvider>
    );
  }
}

export default App;
