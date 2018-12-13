export default {
  contact: {
    EMAIL: process.env.REACT_APP_EMAIL || 'codingcoachio@gmail.com',
    SLACK_URL:
      process.env.REACT_APP_SLACK_URL ||
      'https://join.slack.com/t/coding-coach/shared_invite/enQtNDY3NjI0NzYwNTEyLTA1OTNhZmI0MWNjZTdhMTdiNDc0YjZjYTg3NWU5YmU2MjVjMWUwMWQ3ZWU2Y2I5YjM1YjAyZTkzNWU3YjczOTQ',
  },
  social: {
    FB_URL: process.env.REACT_APP_FACEBOOK_URL || 'https://www.facebook.com/codingcoachio/',
    INSTA_URL: process.env.REACT_APP_INSTA_URL || 'https://www.instagram.com/codingcoach_io/',
    TWITTER_URL: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com/codingcoach_io',
    GITHUB_URL: process.env.REACT_APP_GITHUB_URL || 'https://github.com/Coding-Coach/coding-coach',
  },
  legal: {
    PRIVACY_POLICY_URL:
      process.env.REACT_APP_PRIVACY_POLICY_URL ||
      'https://www.freeprivacypolicy.com/free-privacy-policy-generator.php',
  },
  payments: {
    paypal: process.env.REACT_APP_PAYPAL_DONATE_BUTTON_ID || '123abc',
  },
  oAuth: {
    FB_APP_ID: process.env.REACT_APP_FB_APP_ID || '2303959949890233',
    INSTA_APP_ID: process.env.REACT_APP_INSTA_APP_ID || 'd2f61b9e44f8475fb0dea74b386c8935',
    INSTA_CLIENT_SECRET:
      process.env.REACT_APP_INSTA_CLIENT_SECRET || '77e3ac11ffee44c998e47c5e0ef8ff31',
  },
};
