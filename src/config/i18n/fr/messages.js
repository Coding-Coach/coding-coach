/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    },
  },
  messages: {
    'about.title': 'About',
    'contact.header': 'Contact',
    'contact.message': function(a) {
      return [
        'We want to hear your thoughts! Feel free to join our ',
        a('slackOrg'),
        ' or send us an email at ',
        a('email'),
      ];
    },
    'contact.slack': 'Slack Organization',
    'contact.title': 'Contact',
    'home.coach': 'Coach',
    'home.coding': 'Coding',
    'home.learn': 'Learn more',
    'home.mission': 'Connecting Developers with mentors worldwide',
    'mission.title': 'Mission',
  },
};
