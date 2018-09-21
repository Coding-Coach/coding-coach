import React from 'react';
import styles from './home.scss';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainHeaderBackground} />
      <nav className={styles.navigationBar}>
        <div className={styles.leftNavLinks}>
          <a href="#" className={styles.navLinks}>
            About
          </a>
          <a href="#" className={styles.navLinks}>
            Mission
          </a>
          <a href="#" className={styles.navLinks}>
            Contact
          </a>
        </div>
      </nav>
      <div className={styles.mainHeaderContent}>
        <div>
          <h1 className={styles.header}>Coding</h1>
          <h1 className={styles.header}>Coach</h1>
          <h4>Connecting developers with mentors worldwide</h4>
          <button className={styles.learnMore}>Learn More</button>
        </div>
        <div>
          <img src={require('../../assets/logo.png')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
