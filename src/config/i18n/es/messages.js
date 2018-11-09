/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return 'other';
      return n == 1 ? 'one' : 'other';
    },
  },
  messages: {
    'home.about.title': 'About',
    'home.contact.title': 'Contact',
    'home.mission.title': 'Mission',
  },
};
