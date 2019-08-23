import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import SEO from '../components/SEO';

import notFoundImage from '../assets/images/404.svg';

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <MainNav title=" " />
    <div className="container py-16 blog-content md:flex md:py-64">
      <div className="mb-16 md:w-1/3">
        <img src={notFoundImage} alt="Not found" />
      </div>
      <div className="flex-1 md:pl-16">
        <h2>Not Found</h2>
        <p>
          You just hit a route that doesn&#39;t exist... What can you do now?
          That's a good question! There are several things you can do, going to{' '}
          <Link to="/">home page</Link> would be a good idea. You might want to{' '}
          <Link to="/blog">read the blog</Link>, we have very interesting
          articles and tutorials! Maybe looking for{' '}
          <a href="https://mentors.codingcoach.io">a mentor</a> to improve your
          career?
        </p>
        <p>
          How did you get here? Is this a broken link within the blog? Or maybe
          a link from a third party website? Please{' '}
          <a href="mailto:crysfel@bleext.com">let us know</a> and we will fix it
          ASAP!
        </p>
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default NotFoundPage;
