import React, { Fragment } from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import ScrollTopButton from 'components/scrollTopButton/ScrollTopButton';

import heroImage from '../home/assets/images/coding-coach-logo.svg';

export default function Opening() {
  return (
    <Fragment>
      <Navbar />
      <section className="bg-primary-light bg-diagonal bg-diagonal-primary-light">
        <div className="container flex pt-20 pb-10">
          <div className="flex-1">
            <h1 className="mt-12 text-white text-5xl font-titles tracking-wide">
              Jr. Frontend Developer
            </h1>
            <h2 className="text-white text-sans text-2xl mb-4 font-content font-hairline leading-normal">
              Reactive Technologies
            </h2>
            <a
              href="https://forms.gle/hWXxd7kHimBfEG5M6"
              className={`
                inline-block bg-primary text-white shadows border-4 border-primary shadow-floating rounded
                text-center whitespace-no-wrap no-underline medium uppercase
                hover:shadow hover:bg-primary-dark hover:border-primary-dark
              `}
            >
              <Trans id="openings.apply" defaults="Apply now" />
            </a>
          </div>
          <div className="flex-1 hidden md:block">
            <I18n>
              {({ i18n }) => (
                <Image
                  className="w-5/6 float-right"
                  alt={i18n._(t('home.header.logo')`This is the logo for Coding Coach`)}
                  src={heroImage}
                />
              )}
            </I18n>
          </div>
        </div>
      </section>
      <section className="my-24 container">
        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          About the company
        </h3>
        <p className="mt-6 mb-6 text-lg text-secondary-dark leading-normal font-content">
          Reactive Technologies is looking for a full time Junior Frontend Developer to support our
          food related products. Reactive Recipes is a platform that connects chefs, dieticians and
          nutriologies with people looking to eat healthy.
        </p>
        <p className="mb-6 text-lg text-secondary-dark leading-normal font-content">
          Our focus is to allow people, from all over the world, to find help planning their meals
          by professionals depending on their goals. Reactive Recipes front end is written primarily
          in React JS (javascript) for the backend we use microservices written mostly with Ruby or
          Python.
        </p>
        <p className="mb-12 text-lg text-secondary-dark leading-normal font-content">
          The ideal candidate for this position is a fast learner excited to use the latest
          frameworks to build new and innovative products.
        </p>

        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          Primary responsibilities
        </h3>
        <ul className="mt-6 mb-12">
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Work with development team to build and maintain our web software
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Implement new features for our frontend software
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Fix issues and bugs in our current platform
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Ensure quality code through test development and code review
          </li>
        </ul>
        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          Requirements
        </h3>
        <ul className="mt-6 mb-12">
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Excellent oral and written communication skills
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Ability to work independently as well as with a team of local and remote developers
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Able to stay current with bleeding edge technologies for web
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience with JavaScript
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with modern frontend JS frameworks and libraries, like React, Vue, Angular,
            Flux, Redux and the core principles surrounding these.
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with front-end styling implementations (CSS, CSS in JS, styled-components,
            glamorous, etc.)
          </li>
        </ul>
        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          Bonus skills
        </h3>
        <ul className="mt-6 mb-12">
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with Node and Express
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with React Native
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with web application servers, like Nginx
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with Devops tools like Docker/Kubernetes or continuous integration
            experience with Jenkins or circleCI
          </li>
        </ul>
        <div className="mb-12 text-center">
          <a
            href="https://forms.gle/hWXxd7kHimBfEG5M6"
            className={`
                inline-block bg-primary text-white shadows border-4 border-primary shadow-floating rounded
                text-center whitespace-no-wrap no-underline medium uppercase
                hover:shadow hover:bg-primary-dark hover:border-primary-dark
              `}
          >
            <Trans id="openings.apply" defaults="Apply now" />
          </a>
        </div>
        <p className="text-lg text-secondary-light leading-normal font-content">
          * This is a mock opening for a mock company to set up a mock interview process.
        </p>
      </section>
      <ScrollTopButton />
    </Fragment>
  );
}
