import React from 'react';

export default function withLoginHOC(WrappedComponent) {
  return class WithLogin extends React.Component {
    onSuccessCallback(data) {
      // TODO: Call API with returned data and if there is a success redirect to login page
      console.log(data);
    }

    render() {
      return <WrappedComponent {...this.props} callback={this.onSuccessCallback} />;
    }
  };
}
