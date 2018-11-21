import React, { Fragment } from 'react';
import { Trans, t } from '@lingui/macro';

import Image from 'components/image/Image';

import logo from '../home/assets/images/coding-coach-logo.svg';

export default function Login() {
  return (
    <div className="h-screen bg-gradient-primary px-4 py-3">
      <Image className="w-12" src={logo} />
      <h1 className="text-white font-semibold">
        <Trans id="site.title" defaults="Coding Coach" />
      </h1>
    </div>
  );
}
