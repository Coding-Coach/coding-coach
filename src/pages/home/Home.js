import React, { Component, Fragment } from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import OverlayCookie from 'components/overlayCookie/OverlayCookie';
import Footer from 'components/footer/Footer';
import LegalModal from './components/LegalModal';
import Hero from './components/Hero';
import HomeSection from './components/HomeSection';
import SocialMedia from './components/SocialMedia';
import ScrollTopButton from 'components/scrollTopButton/ScrollTopButton';
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import ImageContact from './assets/images/contact.svg';

import config from 'config/constants';

const { EMAIL } = config.contact;

class Home extends Component {
  state = {
    legal: {
      page: undefined,
      show: false,
    },
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
        <Hero />
        <I18n>
          {({ i18n }) => (
            <main className="">
              <HomeSection
                id="about"
                align="right"
                title={i18n._(t`home.about.title`)}
                text={i18n._(t`home.about.description`)}
                media={<Image src={ImageAbout} alt={i18n._(t`home.about.img`)} />}
              />
              <HomeSection
                id="mission"
                align="left"
                title={i18n._(t`home.mission.title`)}
                text={i18n._(t`home.mission.description`)}
                media={<Image src={ImageMission} alt={i18n._(t`home.mission.img`)} />}
              />
              <HomeSection
                id="contact"
                align="right"
                title={i18n._(t`home.contact.title`)}
                media={<img src={ImageContact} alt={i18n._(t`home.contact.img`)} />}
              >
                <p className="mb-4 text-lg text-secondary-dark leading-normal font-content text-right">
                  <Trans id="home.contact.description">
                    <a
                      target="_blank"
                      href={config.social.SLACK_URL}
                      className="text-black border-b border-black no-underline hover:bg-primary-light hover:text-white hover:border-primary-light"
                      rel="noopener noreferrer"
                    >
                      Slack Organization
                    </a>
                    <a
                      target="_blank"
                      href={`mailto:${EMAIL}`}
                      className="text-primary-light no-underline hover:underline"
                      rel="noopener noreferrer"
                    >
                      {EMAIL}
                    </a>
                  </Trans>
                </p>
                <SocialMedia />
              </HomeSection>
            </main>
          )}
        </I18n>
        <Footer onClickLegal={this.toggleModal} />
        <OverlayCookie onReadMore={this.toggleModal} />
        {legal.show && <LegalModal page={legal.page} onClose={this.toggleModal} />}
        <ScrollTopButton />
      </Fragment>
    );
  }
}

export default Home;
