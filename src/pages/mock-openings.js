import React, { Fragment } from 'react';

import Button from '../components/Button';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import SEO from '../components/SEO';

const MockOpenings = () => (
  <Fragment>
    <SEO title="Mock Openings" />
    <MainNav title="Mock Openings" />
    <div className="container py-16 blog-content md:flex">
      <div className="flex-1 md:pl-16">
        <p>
          In Coding Coach beside our open-source application,  we have an opportunity for all developers to try a mock job opportunity. This way developers can learn the common process of applying for a job, how to prepare C.V. and cover letters, different steps of the process, and estimate themself and their knowledge during the different rules. We are defining a company named CodingCoach CO. as our fake company.
        </p>

        <div className="bg-danger-lighter border-danger-darker border px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">NOTE:</strong>
          <span className="block sm:inline"> This is a fake job opportunity created by Coding Coach to train developers getting familiar with the process of interviewing.</span>
        </div>

        <table className="table-auto w-full mt-12 mb-12">
          <thead>
            <tr>
              <th className="px-2 py-1 bg-primary-lighter" />
              <th className="px-2 py-1 bg-primary-lighter">Role</th>
              <th className="px-2 py-1 bg-primary-lighter">Title</th>
              <th className="px-2 py-1 bg-primary-lighter">Experience Level</th>
              <th className="px-2 py-1 bg-primary-lighter" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">Front-End</td>
              <td className="border px-4 py-2">Jr. Front-end Engineer</td>
              <td className="border px-4 py-2">Junior, Mid-Level</td>
              <td className="border px-4 py-2">
                <Button className="uppercase shadow-lg" to="/mock-openings/jr-frontend-engineer/">
                  Apply
                </Button>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Front-End</td>
              <td className="border px-4 py-2">Senior Front-end Developer, React Focus</td>
              <td className="border px-4 py-2">Mid-Level, Senior</td>
              <td className="border px-4 py-2">
                <Button className="uppercase shadow-lg" to="/mock-openings/senior-frontend-developer-react-focus/">
                  Apply
                </Button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">Back-end</td>
              <td className="border px-4 py-2">Back-end Node.Js developer</td>
              <td className="border px-4 py-2">Junior, Mid-Level</td>
              <td className="border px-4 py-2">
                <Button className="uppercase shadow-lg" to="/mock-openings/backend-nodejs-developer/">
                  Apply
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    <Footer />
  </Fragment>
);

export default MockOpenings;
