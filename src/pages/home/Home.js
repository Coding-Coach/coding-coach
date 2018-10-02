import React from 'react';
import { Navbar } from 'components';
import styles from './assets/home.scss';
import meeting from './assets/meeting.svg';

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <Navbar />
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>Coding</h1>
          <h1 className={styles.header}>Coach</h1>
          <h4>Connecting developers with mentors worldwide</h4>
          <button className={styles.learnMore}>Learn More</button>
        </div>
        <div>
          <img alt="coding coach logo" src={meeting} />
        </div>
      </div>
    </section>
  );
};

export default Home;
