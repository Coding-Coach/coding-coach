import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainNav from '../components/MainNav';

export default function LegalTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Fragment>
      <MainNav />
      <Header title={frontmatter.title} subtitle={frontmatter.date} />
      <div
        className="container py-12 blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer />
    </Fragment>
  );
}

export const pageQuery = graphql`
  query LegalQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
