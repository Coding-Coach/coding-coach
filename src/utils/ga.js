import ReactGA from 'react-ga';

export default {
  hasGABeenInit: false,
  initGA() {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    this.hasGABeenInit = true;
  },
  trackCurrentPage() {
    if (this.hasGABeenInit) {
      ReactGA.pageview(window.location.pathname);
    }
  },
};