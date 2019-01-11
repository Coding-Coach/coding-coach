import React from 'react';
import { Trans } from '@lingui/macro';
import { noop } from 'utils/noop';

import Button from 'components/button/Button';

import { ReactComponent as Logo } from '../home/assets/images/coding-coach-logo.svg';

const SignUp = () => (
  <div className="flex justify-between mb-12">
    <Logo className="w-12 h-8" />
    <Button onClick={noop} shape="pill" size="small" typography="none">
      <Trans id="auth.signup.title" defaults="Sign Up" />
    </Button>
  </div>
);

const TitleMessage = ({ id, defaults }) => (
  <div className="px-2 md:w-3/5 lg:w-1/3">
    <h1 className="text-white font-semibold mb-2">
      <Trans id="site.title" defaults="Coding Coach" />
    </h1>
    <p className="text-white font-sm w-full mb-8">
      <Trans id={id} defaults={defaults} />
    </p>
  </div>
);

export { SignUp, TitleMessage };
