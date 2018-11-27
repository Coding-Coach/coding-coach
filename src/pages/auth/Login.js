import React, { Fragment } from 'react';
import { Trans, t } from '@lingui/macro';
import { noop } from 'utils/noop';

import Button from 'components/button/Button';
import Image from 'components/image/Image';
import TextField from 'components/textfield/TextField';
import { Panel, PanelContent } from 'components/panel/Panel';

import logo from '../home/assets/images/coding-coach-logo.svg';

export default function Login() {
  return (
    <div className="h-screen bg-gradient-primary px-4 py-3">
      <div className="flex justify-between mb-12">
        <Image className="w-12 h-8" src={logo} />
        <Button onClick={noop} shape="pill" size="small" typography="none">
          Sign up
        </Button>
      </div>
      <div className="px-2">
        <h1 className="text-white font-semibold mb-2">
          <Trans id="site.title" defaults="Coding Coach" />
        </h1>
        <p className="text-white font-sm w-3/4 mb-4">
          Sign in or create a new account to get started.
        </p>
        <Panel>
          <PanelContent>
            <h2 className="text-xl font-semibold text-primary mb-4">Sign In</h2>
            <TextField label="Email Address" name="email" />
            <TextField label="Password" name="password" type="password" />
            <Button onClick={noop} size="small" typography="none" fullWidth>
              Let's go!
            </Button>
          </PanelContent>
        </Panel>
      </div>
    </div>
  );
}
