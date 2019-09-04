import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Image from 'gatsby-image';

import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import { buildAuthorIndex } from '../utils/authors';

const windowGlobal = typeof window !== 'undefined' && window

export default function PostTemplate({ data }) {
  const { authors, post } = data;
  const { frontmatter, html, fields } = post;
  const authorIndex = buildAuthorIndex(authors);
  const author = authorIndex[frontmatter.author] || {};
  const disqusConfig = {
    url: `https://codingcoach.io${windowGlobal.location && windowGlobal.location.pathname}`,
    identifier: post.fields.slug,
    title: post.frontmatter.title,
  }

  return (
    <Fragment>
      <SEO title={frontmatter.title} />
      <MainNav showLogo title="Blog" />
      <div className="container py-16 lg:flex lg:flex-row">
        <main className="lg:w-3/4 xl:pr-16">
          <p className=" font-body text-xs md:text-sm">
            {frontmatter.tags.map(tag => (
              <span
                key={tag}
                className="inline-block mr-2 uppercase"
              >
                {tag}
              </span>
            ))}
          </p>
          <h1 className=" font-display text-2xl md:text-3xl lg:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mb-4 font-body uppercase  text-xs md:text-sm">
            <a href={author.frontmatter.link} className="hover:underline">{author.frontmatter.name}</a>{' '}
            <span className="inline-block mx-2">&middot;</span>{' '}
            {frontmatter.date}{' '}
            <span className="inline-block mx-2">&middot;</span>{' '}
            {fields.readingTime.text}
            <span className="inline-block mx-2">&middot;</span>{' '}
            { windowGlobal && <CommentCount config={disqusConfig} placeholder={'...'} /> }
          </p>
          <div className="mb-4" style={{ maxHeight: '480px' }}>
            {frontmatter.image && (
              <Image
                fluid={frontmatter.image.childImageSharp.fluid}
                style={{ maxHeight: '480px' }}
              />
            )}
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          { windowGlobal && <Disqus config={disqusConfig} style={{ margin: '0', width: 'auto' }}/> }
        </main>
        <Sidebar author={author} />
      </div>
      <Footer />
    </Fragment>
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        author
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }

  authors: allMarkdownRemark(
    filter: { fields: { slug: { regex: "/^/authors/.*/" } } }
  ) {
      edges {
        node {
          frontmatter {
            name
            avatar
            about
            link
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;
