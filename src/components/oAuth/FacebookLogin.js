import React from 'react';
import { func, string, bool } from 'prop-types';

import withLogin from './withLogin';

class FacebookLogin extends React.Component {
  static defaultProps = {
    language: 'en_US',
    xfbml: false,
    cookie: false,
    isDisabled: false,
    version: '2.8',
    scope: 'public_profile,email',
    authType: '',
    fields: 'name',
  };

  state = {
    isSdkLoaded: false,
    isProcessing: false,
  };

  componentDidMount() {
    this._isMounted = true;
    if (document.getElementById('fb-sdk')) {
      this.setState({ isSdkLoaded: true });
      return;
    }
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  loadSdkAsynchronously() {
    const { language } = this.props;
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = `http://connect.facebook.net/${language}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'fb-sdk');
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie,
      });
      if (this._isMounted) {
        this.setState({ isSdkLoaded: true });
      }
    };
  }

  fbLogin = (e) => {
    if (!this.state.isSdkLoaded || this.state.isProcessing || this.props.isDisabled) {
      return;
    }
    this.setState({ isProcessing: true });

    if (window.FB) {
      window.FB.login(
        (response) => {
          if (this._isMounted) {
            this.setState({ isProcessing: false });
            if (response.authResponse) {
              window.FB.api(
                '/me',
                { locale: this.props.language, fields: this.props.fields },
                (me) => {
                  Object.assign(me, response.authResponse);
                  // console.log(me);
                  this.props.callback(me);
                },
              );
            }
          }
        },
        { scope: this.props.authType, auth_type: this.props.authType },
      );
    }
  };

  render() {
    const propsForRender = {
      onClick: this.fbLogin,
    };

    return this.props.render(propsForRender);
  }
}

FacebookLogin.propTypes = {
  appId: string.isRequired,
  language: string,
  render: func.isRequired,
  xfbml: bool,
  cookie: bool,
  isDisabled: bool,
  scope: string,
  authType: string,
  fields: string,
  callback: func.isRequired,
};

export default withLogin(FacebookLogin);
