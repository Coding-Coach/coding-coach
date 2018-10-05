import React from 'react';
import { Navbar } from 'components';
import styles from './assets/home.scss';
import meeting from './assets/meeting.svg';
import { Trans, withI18n } from '@lingui/react';

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <Navbar />
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>
            <Trans id="home.coding">Coding</Trans>
          </h1>
          <h1 className={styles.header}>
            <Trans id="home.coach">Coach</Trans>
          </h1>
          <h4>
            <Trans id="home.mission">Connecting Developers with mentors worldwide</Trans>
          </h4>
          <button className={styles.learnMore}>
            <Trans id="home.learn">Learn more</Trans>
          </button>
        </div>
        <div>
          <img alt="coding coach logo" src={meeting} />
        </div>
      </div>
    </section>
  );
};

export default withI18n()(Home);
