import React from 'react';

import logoImage from '../../assets/images/logo.svg';

export default React.memo(function Header({ children, title, subtitle }) {
  return (
    <header className="bg-primary-light bg-diagonal bg-diagonal-primary-light">
      <div className="container pt-20 pb-10 flex">
        <div className="flex-1">
          <h1 className="font-display font-semibold text-white text-7xl uppercase tracking-wider leading-tight md:whitespace-pre">{title}</h1>
          {subtitle && <h2 className="text-white text-sans text-2xl mb-4 font-body font-hairline leading-tight">{subtitle}</h2>}
          {children}
        </div>
        <div className="hidden md:block flex-1">
          <img src={logoImage} className="w-5/6 float-right" alt="The coding coach logo" />
        </div>
      </div>
    </header>
  );
});
