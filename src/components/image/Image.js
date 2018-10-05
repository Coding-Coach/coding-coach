import React, { Component } from 'react';

const empty = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default class Image extends Component {
  state = {
    error: false,
  };

  onError = () => {
    this.setState({
      error: true,
    });
  };

  render() {
    const { error } = this.state;
    const { alt, className, src } = this.props;

    return <img src={error ? empty : src} className={className} onError={this.onError} alt={alt} />;
  }
}
