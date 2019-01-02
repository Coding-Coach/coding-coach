import React, { Component } from 'react';
import Header from './components/Header';
import IllustratedMessage from './components/IllustratedMessage';
import Button from 'components/button/Button';
import LogoSrc from './components/assets/logo.svg';

class Dashboard extends Component {
  getBanner = () => (
    <IllustratedMessage
      imageSrc={LogoSrc}
      message="You have 3 new mentorship messages!"
      button={
        <Button onClick={() => console.log('click')} size="small">
          open
        </Button>
      }
    />
  );

  render() {
    return <Header banner={this.getBanner()} />;
  }
}

export default Dashboard;
