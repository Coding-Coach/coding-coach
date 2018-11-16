/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other';
      return n >= 0 && n < 2 ? 'one' : 'other';
    },
  },
  messages: {
    'common.close': 'common.close',
    'footer.legal.cookies': 'footer.legal.cookies',
    'footer.legal.privacy': 'footer.legal.privacy',
    'footer.legal.terms': 'footer.legal.terms',
    'home.about.description': 'home.about.description',
    'home.about.img': 'home.about.img',
    'home.about.title': 'home.about.title',
    'home.contact.description': 'home.contact.description',
    'home.contact.img': 'home.contact.img',
    'home.contact.title': 'home.contact.title',
    'home.header.cta': 'home.header.cta',
    'home.header.logo': 'home.header.logo',
    'home.mission.description': 'home.mission.description',
    'home.mission.img': 'home.mission.img',
    'home.mission.title': 'home.mission.title',
    'legal.notification': 'legal.notification',
    'site.slogan': 'site.slogan',
    'site.title': 'site.title',
  },
};
