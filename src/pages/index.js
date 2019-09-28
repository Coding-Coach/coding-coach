import React, { Fragment } from 'react';
import classNames from 'classnames';

import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNav from '../components/MainNav';
import SEO from '../components/SEO';

import FacebookIcon from '../components/Icon/Facebook';
import GithubIcon from '../components/Icon/Github';
import TwitterIcon from '../components/Icon/Twitter';

import aboutImage from '../assets/images/about.svg';
import missionImage from '../assets/images/mission.svg';
import contactImage from '../assets/images/contact.svg';

export default function IndexPage() {
  return (
    <Fragment>
      <SEO
        title="Home"
        description="Connecting developers with mentors worldwide"
      />
      <MainNav />
      <Header
        title={`Coding\nCoach`}
        subtitle="Connecting developers with mentors worldwide"
      >
        <Button
          to="https://mentors.codingcoach.io"
          className="uppercase shadow-lg"
        >
          Find a mentor
        </Button>
      </Header>
      <Section
        title="About"
        description="Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world. It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate. This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost. Coding Coach is created by the people, for the people."
        image={aboutImage}
        alignRight
      />
      <Section
        title="Mission"
        description="We believe that mentorship should be accessible to all people regardless of location or financial standing. In pursuit of this goal we will provide a free and open source platform to facilitate mentorship connections. Our mission is to foster a greater sense of collaboration and inclusiveness in the technical industry by providing a platform to aid the mentorship process."
        image={missionImage}
      />
      <Section title="Contact" image={contactImage} alignRight>
        <p className="mb-4 text-lg text-secondary-dark leading-normal font-body md:text-right">
          We want to hear your thoughts! Feel free to join our
          <a
            className="inline-block mx-2 text-black border-b border-black no-underline hover:bg-primary-light hover:text-white hover:border-primary-light"
            href="https://join.slack.com/t/coding-coach/shared_invite/enQtNDYxNTcwMjk4MDcwLWQ2MWEwYTc3YTZmMmM5ZDJjOGRkMDg0NGRjOWJhZThlZjUyMmViYzM4YjY4MjFjZGJkNjAzNDVlYTEwMWY2ZTU"
          >
            Slack Organization
          </a>
          or send us an email at{' '}
          <a
            className="text-primary-light no-underline hover:underline"
            href="mailto:codingcoachio@gmail.com"
          >
            codingcoachio@gmail.com
          </a>
        </p>
        <p className="flex flex-row text-primary-light">
          <SocialButton
            to="https://twitter.com/codingcoach_io"
            Icon={TwitterIcon}
            className="mr-6"
          />
          <SocialButton
            to="https://www.facebook.com/codingcoachio/"
            Icon={FacebookIcon}
            className="mr-6"
          />
          <SocialButton
            to="https://github.com/Coding-Coach"
            Icon={GithubIcon}
            className="mr-6 md:mr-0"
          />
        </p>
      </Section>
      <Footer />
    </Fragment>
  );
}

function Section({ alignRight, children, description, image, title }) {
  const mainCss = classNames('py-32', {
    'bg-primary-lighter bg-band bg-band-primary-lighter': !alignRight,
  });
  const containerCss = classNames('container md:flex', {
    'md:flex-row-reverse ': alignRight,
    'md:flex-row': !alignRight,
  });
  const contentCss = classNames('md:flex-1 md:flex md:flex-col', {
    'md:items-end md:pl-16': alignRight,
    'md:pr-16': !alignRight,
  });
  const titleCss = classNames(
    'text-6xl font-display font-normal uppercase leading-tight mb-6 border-b border-secondary-lightest',
    {
      'text-primary-light md:text-right': alignRight,
      'text-secondary-dark': !alignRight,
    }
  );
  const descriptionCss = classNames(
    'text-lg text-secondary-dark leading-normal font-body',
    {
      'md:text-right': alignRight,
    }
  );

  return (
    <section className={mainCss}>
      <div className={containerCss}>
        <div className={contentCss}>
          <h3 className={titleCss} style={{ width: '250px' }}>
            {title}
          </h3>
          {description && <p className={descriptionCss}>{description}</p>}
          {children}
        </div>
        <div className="mt-16 md:mt-0 md:w-2/5">
          <img src={image} alt="Illustration" />
        </div>
      </div>
    </section>
  );
}

function SocialButton({ className, Icon, to }) {
  const css = classNames(
    'mt-3 flex justify-center items-center w-16 h-16 border border-primary-light rounded-full hover:bg-primary-light hover:text-white',
    className
  );

  return (
    <a href={to} className={css}>
      <Icon className="fill-current" width={32} height={32} />
    </a>
  );
}
