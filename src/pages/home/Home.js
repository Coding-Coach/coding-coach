import React, { Component, Fragment } from 'react';

import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import OverlayCookie from 'components/overlayCookie/OverlayCookie';
import Footer from 'components/footer/Footer';
import LegalModal from './components/LegalModal';
import Hero from './components/Hero';
import HomeSection from './components/HomeSection';
import SocialMedia from './components/SocialMedia';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import ImageContact from './assets/images/contact.svg';
import styles from './assets/home.module.scss';

import config from 'config/constants';

class Home extends Component {
  state = {
    legal: {
      page: undefined,
      show: false,
    },
  };

  handleOnClickCTA = () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
    });
  };

  toggleModal = (page) => {
    this.setState((prevState) => ({
      legal: {
        show: !prevState.legal.show,
        page,
      },
    }));
  };

  render() {
    const { legal } = this.state;

    return (
      <Fragment>
        <Navbar />
        <Hero onClick={this.handleOnClickCTA} />
        <main className={styles.content}>
          <HomeSection
            id="about"
            title={'home-about-title'}
            text={'home-about-text'}
            media={<Image src={ImageAbout} alt={'home-about-media-alt'} />}
          />
          <HomeSection
            id="mission"
            title={'home-mission-title'}
            text={'home-mission-text'}
            media={<Image src={ImageMission} alt={'home-mission-media-alt'} />}
          />
          <HomeSection
            id="contact"
            title={'home-contact-title'}
            media={<img src={ImageContact} alt={'home-contact-media-alt'} />}
          >
            <p>
              home-contact-text
              <a
                href={config.contact.SLACK_URL}
                className={styles.slackOrg}
                target="_blank"
                rel="noopener noreferrer"
              >
                {'slack-org'}
              </a>
              <a
                target="_blank"
                href={`mailto:${config.contact.EMAIL}`}
                className={styles.email}
                rel="noopener noreferrer"
              >
                {config.contact.EMAIL}
              </a>
            </p>
            <SocialMedia />
          </HomeSection>
        </main>
        <Footer onClickLegal={this.toggleModal} />
        <OverlayCookie onReadMore={this.toggleModal} />
        {legal.show && <LegalModal page={legal.page} onClose={this.toggleModal} />}
      </Fragment>
    );
  }
}

export default Home;
