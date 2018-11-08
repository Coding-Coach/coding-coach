import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import Button from 'components/button/Button';
import Image from 'components/image/Image';

import heroImage from '../assets/images/coding-coach-logo.svg';

function Hero({ onClick, t }) {
  return (
    <section className="bg-primary-light">
      <div className="container flex pt-16 pb-20">
        <header className="flex-1">
          <h1 className="text-white text-6xl uppercase font-titles tracking-wide md:w-1/2">
            <span>{t('home-header-title')}</span>
          </h1>
          <h2 className="text-white text-sans text-2xl mb-4 font-content font-hairline leading-normal">
            {t('home-header-subtitle')}
          </h2>
          <Button onClick={onClick}>{t('home-header-cta')}</Button>
        </header>
        <div className="flex-1 hidden md:block">
          <Image className="w-5/6 float-right" alt={t('home-header-media-alt')} src={heroImage} />
        </div>
      </div>
    </section>
  );
}

export default translate('translations')(Hero);
