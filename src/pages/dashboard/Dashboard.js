import React, { Component } from 'react';
import Header from './components/Header';
import IllustratedMessage from './components/IllustratedMessage';
import Button from 'components/button/Button';
import IconMessages from 'components/icon/Messages';

class Dashboard extends Component {
  getBanner = () => (
    <IllustratedMessage
      icon={<IconMessages active className={'w-32 md:w-48'} />}
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
