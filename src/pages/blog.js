import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import { buildAuthorIndex } from '../utils/authors';

export default function BlogPage(props) {
  const { posts, authors } = props.data;
  const authorIndex = buildAuthorIndex(authors);

  return (
    <Fragment>
      <SEO
        title="Blog"
        description="Articles, tutorials and opinions from the community, everyone is welcome to contribute."
      />
      <MainNav showLogo title="Blog" />
      <div className="container py-16 lg:flex lg:flex-row">
        <main className="lg:w-3/4">
          {posts.edges.map(({ node }) => (
            <PostExcerpt
              key={node.id}
              data={node.frontmatter}
              author={authorIndex[node.frontmatter.author]}
              excerpt={node.excerpt}
              fields={node.fields}
            />
          ))}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </Fragment>
  );
}

function PostExcerpt({ author, data, excerpt, fields }) {
  return (
    <article className="mb-16 md:flex">
      <div className="mb-2 md:w-1/3 md:mb-0">
        {data.image && (
          <Link to={fields.slug}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              style={{ maxHeight: '170px' }}
            />
          </Link>
        )}
      </div>
      <div className="md:w-2/3 md:pl-8">
        <p className="mb-0">
          {data.tags.map(tag => (
            <span
              key={tag}
              className="inline-block mr-2 uppercase text-xs text-secondary-dark"
            >
              {tag}
            </span>
          ))}
        </p>
        <h2 className="my-1 font-display text-2xl">
          <Link to={fields.slug} className="hover:underline">
            {data.title}
          </Link>
        </h2>
        <p className="mb-1 font-body text-sm uppercase text-secondary-dark">
          <a aria-label={author.frontmatter.name} href={author.frontmatter.link} className="hover:underline">{author.frontmatter.name}</a> <span className="inline-block mx-2">&middot;</span>{' '}
          {data.date} <span className="inline-block mx-2">&middot;</span>{' '}
          {fields.readingTime.text}
        </p>
        <p className="font-body text-base text-secondary-dark">{excerpt}</p>
      </div>
    </article>
  );
}

export const postsQuery = graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^/blog/.*/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
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
            id
            excerpt(truncate: false)
            fields {
              slug
              readingTime {
                text
              }
            }
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
