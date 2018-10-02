/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
            ? 'two'
            : n10 == 3 && n100 != 13
              ? 'few'
              : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    },
  },
  messages: {
    About: 'About',
    Coach: 'Coach',
    Coding: 'Coding',
    'Connecting developers with mentors worldwide': 'Connecting developers with mentors worldwide',
    Contact: 'Contact',
    'Learn More': 'Learn More',
    Mission: 'Mission',
    'contact-page-header': 'contact-page-header',
    'slack-org': 'slack-org',
  },
};
