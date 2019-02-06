import ReactGA from 'react-ga';
import Config from 'config/constants';

const isProduction = process.env.NODE_ENV === 'production';

const GA = {
  /**
   * Initializes GA for production only
   */
  init() {
    if (isProduction) {
      ReactGA.initialize(Config.ga.id);
    }
  },

  /**
   * An object with a reference to `window.location`
   * @param {Object} options
   */
  trackPage({ location }) {
    ReactGA.pageview(location.pathname + location.search);
  },

  /**
   * GA config object
   * @param {Object} options
   */
  trackEvent(options) {
    ReactGA.event(options);
  },

  /**
   * The name of the modal to show
   * @param {String} name
   */
  trackModal(name) {
    ReactGA.modalview(name);
  },
};

export default GA;
