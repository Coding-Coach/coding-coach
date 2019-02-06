export default {
  contact: {
    EMAIL: process.env.REACT_APP_EMAIL || 'codingcoachio@gmail.com',
  },
  social: {
    FB_URL: process.env.REACT_APP_FACEBOOK_URL || 'https://www.facebook.com/codingcoachio/',
    TWITTER_URL: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/codingcoach_io',
    GITHUB_URL: process.env.REACT_APP_GITHUB_URL || 'https://github.com/Coding-Coach/coding-coach',
    SLACK_URL: process.env.REACT_APP_SLACK_URL,
  },
  ga: {
    id: process.env.REACT_APP_GA,
  },
  legal: {
    PRIVACY_POLICY_URL:
      process.env.REACT_APP_PRIVACY_POLICY_URL ||
      'https://www.freeprivacypolicy.com/free-privacy-policy-generator.php',
  },
  payments: {},
};
