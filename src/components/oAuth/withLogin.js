import React from 'react';

export default function withLoginHOC(WrappedComponent) {
  return class WithLogin extends React.Component {
    onSuccessCallback(data) {
      // TODO: Call API with returned data and if there is a success redirect to login page
      console.log(data);
    }

    // TODO: Call backend api with code returned from insta api, which in turn will get the access token and then the user details.
    onInstaCallback(info) {
      console.log(info);
      // fetch(`https://api.instagram.com/oauth/access_token`, {
      //   method: 'POST',
      //   body: {
      //     ...info,
      //     grant_type: 'authorization_code'
      //   }
      // }).then(res => console.log(res));
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          callback={this.onSuccessCallback}
          onInstaCallback={this.onInstaCallback}
        />
      );
    }
  };
}
