import React, { Component } from 'react';

class MailingModal extends Component {
  componentDidMount() {
    if (window.dojoRequire !== undefined) {
      window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
        L.start({
          baseUrl: 'mc.us19.list-manage.com',
          uuid: '98c69835a5abaf1759e7618ec',
          lid: '3f9f14ba16',
          uniqueMethods: true,
        });
      });
    }
  }

  render() {
    return <div />;
  }
}

export default MailingModal;
