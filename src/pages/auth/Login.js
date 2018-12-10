import React from 'react';
import { Trans, t } from '@lingui/macro';
import { noop } from 'utils/noop';
import { I18n } from '@lingui/react';

import Button from 'components/button/Button';
import Facebook from 'components/icon/Facebook';
import FacebookLogin from 'components/facebookLogin/FacebookLogin';
import Instagram from 'components/icon/Instagram';
import TextField from 'components/textfield/TextField';
import Twitter from 'components/icon/Twitter';
import { Panel, PanelContent } from 'components/panel/Panel';

import { ReactComponent as Logo } from '../home/assets/images/coding-coach-logo.svg';

export default function Login() {
  return (
    <div className="h-screen bg-gradient-primary py-3">
      <div className="container">
        <div className="flex justify-between mb-12">
          <Logo className="w-12 h-8" />
          <Button onClick={noop} shape="pill" size="small" typography="none">
            <Trans id="auth.signup.title" defaults="Sign Up" />
          </Button>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <div className="px-2 md:w-3/5 lg:w-1/3">
            <h1 className="text-white font-semibold mb-2">
              <Trans id="site.title" defaults="Coding Coach" />
            </h1>
            <p className="text-white font-sm w-3/4 mb-8">
              <Trans
                id="auth.signin.description"
                defaults="Sign in or create a new account to get started."
              />
            </p>
            <Panel floating>
              <PanelContent>
                <div className="flex mb-6">
                  <h2 className="flex-1 text-2xl font-semibold text-primary">
                    <Trans id="auth.signin.title" defaults="Sign In" />
                  </h2>
                  <a href="#noop" className="text-sm h-4 mt-1">
                    Forgot Password?
                  </a>
                </div>
                <I18n>
                  {({ i18n }) => (
                    <div>
                      <TextField
                        label={i18n._(t('auth.signup.email')`Email Address`)}
                        name="email"
                      />
                      <TextField
                        label={i18n._(t('auth.signup.password')`Password`)}
                        name="password"
                        type="password"
                      />
                    </div>
                  )}
                </I18n>
                <p className="text-center text-secondary-lighter text-sm mb-4">
                  Or sign in with social
                </p>
                <div className="flex justify-center mb-8">
                  <Twitter width={31} height={25} color="#76A9EA" className="mx-2" />
                  <FacebookLogin
                    appId="2303959949890233"
                    callback={(data) => console.log(data)}
                    render={(renderProps) => (
                      <Facebook
                        width={25}
                        height={25}
                        color="#475993"
                        className="mx-2"
                        onClick={renderProps.onClick}
                      />
                    )}
                  />
                  <Instagram width={25} height={25} className="mx-2" />
                </div>
                <Button onClick={noop} size="small" typography="none" fullWidth>
                  <Trans id="auth.signin.go" defaults="Let's go!" />
                </Button>
              </PanelContent>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
