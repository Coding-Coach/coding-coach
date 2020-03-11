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
            <h1 className="mt-12 text-white text-5xl font-titles tracking-wide">Mock Openings</h1>
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
          Mock Openings
        </h3>
        <p className="mt-6 mb-6 text-lg text-secondary-dark leading-normal font-content">
          In Coding Coach beside our open-source application, we have an opportunity for all
          developers to try a mock job opportunity. This way developers can learn the common process
          of applying for a job, how to prepare C.V. and cover letters, different steps of the
          process, and estimate themselves and their knowledge during the different rules. We are
          defining a company named CodingCoach CO. as our fake company.
        </p>

        <div className="text-lg danger mb-12 font-content p-8 rounded">
          NOTE: this is a fake job opportunity created by Coding Coach to train developers getting
          familiar with the process of interviewing
        </div>

        <h3 className="inline text-primary-light text-3xl font-titles font-normal uppercase leading-tight text-left mb-6 border-b border-secondary-lightest text-secondary-dark">
          Open positions:
        </h3>

        <table className="table-auto ml-auto mr-auto mt-12 mb-12">
          <thead>
            <tr>
              <th class="px-2 py-1 bg-primary" />
              <th class="px-2 py-1 bg-primary">Role</th>
              <th class="px-2 py-1 bg-primary">Title</th>
              <th class="px-2 py-1 bg-primary">Experience Level</th>
              <th class="px-2 py-1 bg-primary" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Front-End</td>
              <td class="border px-4 py-2">Jr. Front-end Engineer</td>
              <td class="border px-4 py-2">Junior, Mid-Level</td>
              <td class="border px-4 py-2">
                <a
                  href="/openings/jr-frontend-engineer"
                  className={`
                      inline-block bg-primary text-white shadows border-1 border-primary shadow-floating rounded
                      text-center whitespace-no-wrap no-underline small uppercase
                    `}
                >
                  <Trans id="openings.detailandapply" defaults="View detail & Apply" />
                </a>
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">2</td>
              <td class="border px-4 py-2">Front-End</td>
              <td class="border px-4 py-2">Senior Front-end Developer, React Focus</td>
              <td class="border px-4 py-2">Mid-Level, Senior</td>
              <td class="border px-4 py-2">
                <a
                  href="/openings/senior-frontend-developer-react-focus"
                  className={`
                      inline-block bg-primary text-white shadows border-1 border-primary shadow-floating rounded
                      text-center whitespace-no-wrap no-underline small uppercase
                    `}
                >
                  <Trans id="openings.detailandapply" defaults="View detail & Apply" />
                </a>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">3</td>
              <td class="border px-4 py-2">Back-end</td>
              <td class="border px-4 py-2">Back-end Node.Js developer</td>
              <td class="border px-4 py-2">Junior, Mid-Level</td>
              <td class="border px-4 py-2">
                <a
                  href="/openings/backend-nodejs-developer"
                  className={`
                      inline-block bg-primary text-white shadows border-1 border-primary shadow-floating rounded
                      text-center whitespace-no-wrap no-underline small uppercase
                    `}
                >
                  <Trans id="openings.detailandapply" defaults="View detail & Apply" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-lg text-secondary-light leading-normal font-content">
          * This is a mock opening for a mock company to set up a mock interview process.
        </p>
      </section>
      <ScrollTopButton />
    </Fragment>
  );
}
