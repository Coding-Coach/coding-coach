/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    },
  },
  messages: {
    About: 'well',
    Coach: 'Coach',
    Coding: 'Coodng',
    'Connecting developers with mentors worldwide': 'Connecting developers with mentors worldwide',
    Contact: 'Contact',
    'Learn More': 'Learn More',
    Mission: 'Mission',
    'contact-page-header': 'contact-page-header',
    'slack-org': 'slack-org',
  },
};
