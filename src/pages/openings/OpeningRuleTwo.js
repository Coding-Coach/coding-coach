import React, { Fragment } from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import Navbar from 'components/navbar/Navbar';
import Image from 'components/image/Image';
import ScrollTopButton from 'components/scrollTopButton/ScrollTopButton';

import heroImage from '../home/assets/images/coding-coach-logo.svg';

export default function OpeningRuleTwo() {
  return (
    <Fragment>
      <Navbar />
      <section className="bg-primary-light bg-diagonal bg-diagonal-primary-light">
        <div className="container flex pt-20 pb-10">
          <div className="flex-1">
            <h1 className="mt-12 text-white text-5xl font-titles tracking-wide">
              Mid-Level, Senior Frontend Developer
            </h1>
            <h2 className="text-white text-sans text-2xl mb-4 font-content font-hairline leading-normal">
              CodingCoach CO.
            </h2>
            <a
              href="https://forms.gle/65vEUyC9bRicpsCt9"
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
          As market leaders, we have high expectations of ourselves and strive for continuous
          improvement. We work with the best, to be the best. The secret to our success is simple:
          we keep learning and exploring. We have our eyes set on the world and want to offer our
          safety software globally, to complex businesses across different industries. We are the
          market-leading company in Control of Work software products, supporting thousands of users
          from across the globe, at top multinationals.
        </p>

        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          What are your accountabilities?
        </h3>
        <ul className="mt-6 mb-12">
          <li className="text-lg text-secondary-dark leading-normal font-content">
            You will be part of an agile team of software engineers, who create and maintain a wide
            portfolio of globally distributed products that address the core safety needs of
            industry leaders. The software products you will work on significantly change the way
            hazardous industries manage the operations of their assets and increase operational
            safety.
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            In this Software Engineering team you will work closely together with other
            highly-skilled Software Engineers, QA- and DevOps Engineers.
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Of course, you will write a clean and well-tested code. But overall your work will
            contribute to eVision’s next major milestones; improve core product quality, simplifying
            configurability and harmonizing our UX-Design, Core Frameworks, and Deployment across
            our products.
          </li>
        </ul>
        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          Skills & Requirements
        </h3>
        <ul className="mt-6 mb-12">
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Strong knowledge of JavaScript, including DOM manipulation and the JavaScript object
            model
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with newer specifications of EcmaScript
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Thorough understanding of React.js and its core principles and Design Pattern specially
            functional programming
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Strong knowledge of state management like Redux, Mobx
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Strong knowledge of Node.js
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Strong knowledge of CSS & SASS, as well as responsive design
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience with data structure libraries (e.g., Immutable.js)
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Knowledge of modern authorization mechanisms, such as JSON Web Token
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Familiarity with modern front-end build pipelines and tools
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
          </li>

          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience with WebSockets or similar technology
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience writing concise and well structured OOP code.
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Experience in Agile/Scrum, good communication skills and the ability to work well in a
            team
          </li>
          <li className="text-lg text-secondary-dark leading-normal font-content">
            Good grip on TDD, and writing elegant test cases
          </li>
        </ul>

        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          How to Apply?
        </h3>
        <p className="mt-6 mb-6 text-lg text-secondary-dark leading-normal font-content">
          Please send us your updated C.V.(Resume) with a cover letter via the bellow link.
        </p>

        <div className="mb-12 text-center">
          <a
            href="https://forms.gle/65vEUyC9bRicpsCt9"
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
