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
import ImageAbout from './assets/images/about.svg';
import ImageMission from './assets/images/mission.svg';
import ImageContact from './assets/images/contact.svg';
import styles from './assets/home.module.scss';

import config from 'config/constants';

const { EMAIL } = config.contact;

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
        <I18n>
          {({ i18n }) => (
            <main className={styles.content}>
              <HomeSection
                id="about"
                title={i18n._(t`home.about.title`)}
                text={i18n._(t`home.about.description`)}
                media={<Image src={ImageAbout} alt={i18n._(t`home.about.img`)} />}
              />
              <HomeSection
                id="mission"
                title={i18n._(t`home.mission.title`)}
                text={i18n._(t`home.mission.description`)}
                media={<Image src={ImageMission} alt={i18n._(t`home.mission.img`)} />}
              />
              <HomeSection
                id="contact"
                title={i18n._(t`home.contact.title`)}
                media={<img src={ImageContact} alt={i18n._(t`home.contact.img`)} />}
              >
                <p>
                  <Trans id="home.contact.description">
                    <a
                      href={config.contact.SLACK_URL}
                      className={styles.slackOrg}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Slack Organization
                    </a>
                    <a
                      target="_blank"
                      href={`mailto:${EMAIL}`}
                      className={styles.email}
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
      </Fragment>
    );
  }
}

export default Home;
