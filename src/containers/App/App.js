import React from 'react';
import { func } from 'prop-types';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import styles from './assets/app.scss';
import { initializeGA, trackCurrentPage } from '../../googleAnalytics';

class App extends React.Component {
  componentDidMount() {
    initializeGA();
    trackCurrentPage();
  }
  render() {
    return (
      <div className={styles.app}>
        <img src={require('./assets/mentor.jpg')} alt="Mentor" className={styles.image} />
        <header className={styles.header}>
          <h1 className={styles.title}>{this.props.t('landing-page-header')}</h1>
          <h4 className={styles.tagline}>{this.props.t('landing-page-subheader')}</h4>
          {/* TODO: create a React Component for a `Button` and add scoped styles */}
          <a
            className="button button__white--fill button__link"
            href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.t('landing-page-start')}
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  t: func,
};

// App.defaultProps = {
//   t: () => true,
// };

export default translate('translations')(App);
