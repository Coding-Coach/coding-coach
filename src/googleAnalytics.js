import ReactGA from 'react-ga';

export const initializeGA = () => ReactGA.initialize(process.env.GA_TRACKING_ID);
export const trackCurrentPage = () => ReactGA.pageview(window.location.pathname);
