import React from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

import Button from 'components/button/Button';
import Image from 'components/image/Image';

import heroImage from '../assets/images/coding-coach-logo.svg';

function Hero({ onClick }) {
  return (
    <section className="bg-primary-light bg-diagonal bg-diagonal-primary-light">
      <div className="container flex pt-20 pb-10">
        <header className="flex-1">
          <h1 className="text-white text-6xl uppercase font-titles tracking-wide md:w-1/2">
            <span>
              <Trans id="site.title" defaults="Coding Coach" />
            </span>
          </h1>
          <h2 className="text-white text-sans text-2xl mb-4 font-content font-hairline leading-normal">
            <Trans id="site.slogan" defaults="Connecting developers with mentors worldwide" />
          </h2>
          <a
            href="https://mentors.codingcoach.io"
            className={`
              inline-block bg-primary text-white shadows border-4 border-primary shadow-floating rounded
              text-center whitespace-no-wrap no-underline medium uppercase
              hover:shadow hover:bg-primary-dark hover:border-primary-dark
            `}
          >
            <Trans id="home.header.cta" defaults="Find a Mentor" />
          </a>
        </header>
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
  );
}

export default Hero;
