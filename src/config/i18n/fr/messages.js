/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    },
  },
  messages: {
    'about.title': 'about.title',
    'contact.header': 'contact.header',
    'contact.message': 'contact.message',
    'contact.slack': 'contact.slack',
    'contact.title': 'contact.title',
    'home.coach': 'home.coach',
    'home.coding': 'home.coding',
    'home.learn': 'home.learn',
    'home.mission': 'home.mission',
    'mission.title': 'mission.title',
  },
};
