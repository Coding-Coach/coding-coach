import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';
import SEO from '../../components/SEO';
import Button from '../../components/Button';

export default () => (
  <Fragment>
    <SEO title="Mock Openings : Senior Front-end Developer, React Focus" />
    <MainNav title=" " />
    <div className="container py-16 blog-content md:flex">
      <div className="flex-1 md:pl-16">

        <div className="bg-danger-lighter border-danger-darker border px-4 py-3 rounded relative mb-12" role="alert">
          <strong className="font-bold">NOTE:</strong>
          <span className="block sm:inline"> This is a fake job opportunity created by Coding Coach to train developers getting familiar with the process of interviewing.</span>
        </div>

        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl mb-12">
          Senior Front-end Developer, React Focus
        </h1>

        <h3>About the company</h3>
        <p className="mb-1 text-secondary-dark">
            As market leaders, we have high expectations of ourselves and strive for continuous
            improvement. We work with the best, to be the best. The secret to our success is simple:
            we keep learning and exploring. We have our eyes set on the world and want to offer our
            safety software globally, to complex businesses across different industries. We are the
            market-leading company in Control of Work software products, supporting thousands of users
            from across the globe, at top multinationals.
        </p>

        <h3>What are your accountabilities?</h3>
        <ul className="mt-6 mb-12">
          <li>
            You will be part of an agile team of software engineers, who create and maintain a wide
            portfolio of globally distributed products that address core safety needs of industry
            leaders. The software products you will work on significantly change the way hazardous
            industries manage the operations of their assets and increase operational safety.
          </li>
          <li>
            In this Software Engineering team you will work closely together with other
            highly-skilled Software Engineers, QA- and DevOps Engineers.
          </li>
          <li>
            Of course you will write clean and well-tested code. But overall your work will
            contribute to eVision’s next major milestones; improve core product quality, simplifying
            configurability and harmonizing our UX-Design, Core Frameworks and Deployment across our
            products.
          </li>
        </ul>

        <h3> Skills & Requirements </h3>
        <ul className="mt-6 mb-12">
          <li>
            Strong knowledge of JavaScript, including DOM manipulation and the JavaScript object
            model
          </li>
          <li>
            Familiarity with newer specifications of EcmaScript
          </li>
          <li>
            Thorough understanding of React.js and its core principles and Design Pattern specially
            functional programming
          </li>
          <li>
            Strong knowledge of state management like Redux, Mobx
          </li>
          <li>
            Strong knowledge of Node.js
          </li>
          <li>
            Strong knowledge of CSS & SASS, as well as responsive design
          </li>
          <li>
            Experience with data structure libraries (e.g., Immutable.js)
          </li>
          <li>
            Knowledge of modern authorization mechanisms, such as JSON Web Token
          </li>
          <li>
            Familiarity with modern front-end build pipelines and tools
          </li>
          <li>
            Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
          </li>

          <li>
            Experience with WebSockets or similar technology
          </li>
          <li>
            Experience writing concise and well structured OOP code.
          </li>
          <li>
            Experience in Agile/Scrum, good communication skills and the ability to work well in a
            team
          </li>
          <li>
            Good grip on TDD, and writing elegant test cases
          </li>
        </ul>

        <h3> How to Apply? </h3>
        <p className="mb-1 text-secondary-dark">
          Please send us your updated C.V.(Resume) with a cover letter via the bellow link.
        </p>

        <div className="mb-12">
          <Button to="https://forms.gle/65vEUyC9bRicpsCt9">
            Apply now
          </Button>
        </div>
        <p className="text-lg text-secondary-light leading-normal font-content">
          * This is a mock opening for a mock company to set up a mock interview process.
        </p>

      </div>
    </div>
    <Footer />
  </Fragment>
);
