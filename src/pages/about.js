import React, { Fragment } from 'react';
import { any, bool, string } from 'prop-types';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import MainNav from '../components/MainNav';
import SEO from '../components/SEO';

export default function About({ data }) {
  const {
    allMarkdownRemark: { edges: contributors },
  } = data;

  return (
    <Fragment>
      <SEO
        title="About"
        description="Meet the team of awesome people helping building the platform"
      />
      <MainNav showLogo title="About" />
      <div className="container py-16">
        <Section title="Product Leads">
          <div className="md:flex">
            <div className="mb-8 md:flex-1 md:pr-8">
              <Profile
                image="https://avatars0.githubusercontent.com/u/7671983?s=460&v=4"
                name="Emma Wedekind"
                title="Founder"
                to="https://mentors.codingcoach.io/?name=Emma+Wedekind"
                highlight
              />
            </div>
            <div className="mb-8 md:flex-1 md:pr-8">
              <Profile
                image="https://avatars0.githubusercontent.com/u/219207?s=460&v=4"
                name="Crysfel Villa"
                title="Backend Lead"
                to="https://mentors.codingcoach.io/?name=Crysfel+Villa"
                highlight
              />
            </div>
            <div className="mb-8 md:flex-1">
              <Profile
                image="https://avatars3.githubusercontent.com/u/3723951?s=460&v=4"
                name="Mosh Feuchtwanger"
                title="Frontend Lead"
                to="https://mentors.codingcoach.io/?name=Mosh+Feuchtwanger"
                highlight
              />
            </div>
          </div>
        </Section>
        <Section title="Contributors">
          {contributors.map(({ node: user }) => (
            <Profile
              key={user.id}
              image={user.frontmatter.avatar}
              name={user.frontmatter.name}
              to={user.frontmatter.link}
              className="inline-block w-32 mr-4"
            />
          ))}
        </Section>
      </div>
    </Fragment>
  );
}

function Profile({ className, highlight, image, name, title, to }) {
  const css = classNames(
    {
      'p-4 bg-primary-lighter md:p-6': highlight,
    },
    className
  );
  const titleCss = classNames('font-display truncate', {
    'text-2xl mt-2': highlight,
    'text-lg mt-2': !highlight,
  });

  return (
    <div className={css}>
      <a href={to}>
        <img src={image} alt={name} title={name} />
      </a>
      <h3 className={titleCss}>
        <a href={to} className="hover:underline" title={name}>
          {name}
        </a>
      </h3>
      {title && <p className="mb-1 text-secondary-dark">{title}</p>}
    </div>
  );
}

Profile.propTypes = {
  className: string,
  highlight: bool,
  image: string,
  name: string,
  title: string,
  to: string,
};

function Section({ children, title }) {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-display font-normal uppercase leading-tight mb-12 border-b border-secondary-lightest text-secondary-dark">
        {title}
      </h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: any,
  title: string,
};

export const listQuery = graphql`
  query ContributorsQuery {
    allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/^/contributors/.*/" } }
        fileAbsolutePath: {}
      }
      sort: { order: ASC, fields: frontmatter___name }
    ) {
      edges {
        node {
          frontmatter {
            name
            avatar
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
