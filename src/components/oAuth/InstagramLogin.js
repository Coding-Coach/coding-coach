import React from 'react';
import { string, bool } from 'prop-types';
import withLogin from './withLogin';
import { getQueryParam } from 'utils/getQueryParam';

const IMPLICIT_AUTH_URL = 'https://api.instagram.com/v1/users/self/';
const INSTA_REDIRECT_URL = 'https://api.instagram.com/oauth/authorize/';

class InstagramLogin extends React.Component {
  static propTypes = {
    appId: string.isRequired,
    clientSecret: string.isRequired,
    redirectUri: string,
    scope: string,
    implicitAuth: bool,
  };

  static defaultProps = {
    redirectUri: window.location.href,
    scope: 'basic',
    implicitAuth: false,
  };

  componentDidMount() {
    if (this.props.implicitAuth) {
      const matches = window.location.hash.match(/=(.*)/);
      if (matches) {
        this.getUserInfo(matches[1]);
      }
    } else if (window.location.search.includes('code')) {
      const code = getQueryParam('code');
      this.props.onInstaCallback({
        client_id: this.props.appId,
        client_secret: this.props.clientSecret,
        redirect_uri: this.props.redirectUri,
        code,
      });
    }
  }

  getUserInfo(accessToken) {
    const self = this;
    window.callbackFn = function(info) {
      self.props.callback({
        accessToken,
        id: info.data.id,
        name: info.data.full_name,
        profilePic: info.data.profile_picture,
      });
    };

    const script = document.createElement('script');
    script.src = `${IMPLICIT_AUTH_URL}?access_token=${accessToken}&callback=callbackFn`;
    document.body.appendChild(script);
  }

  onInstaLogin = () => {
    const { appId, redirectUri, scope, implicitAuth } = this.props;
    const responseType = implicitAuth ? 'token' : 'code';
    window.location.href = `${INSTA_REDIRECT_URL}?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
  };

  render() {
    return this.props.render({ onClick: this.onInstaLogin });
  }
}

export default withLogin(InstagramLogin);
