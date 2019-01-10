import React from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

import Button from 'components/button/Button';
import TextField from 'components/textfield/TextField';
import { Panel, PanelContent } from 'components/panel/Panel';
import { SignUp, TitleMessage } from './Utilities';
import { ReactComponent as HandImage } from './assets/images/forgot-password.svg';

const SendResetLink = (props) => (
  <PanelContent>
    <div className="flex mb-6">
      <h2 className="flex-1 text-2xl font-semibold text-primary">
        <Trans id="auth.signup.recovery" defaults="Forgot Password" />
      </h2>
    </div>
    <div className="block text-secondary-light mb-1">
      <Trans
        id="auth.signin.recoverycard"
        defaults="Your recovery email has been sent! Head on over to your email to reset your password and get back to Coding Coach!"
      />
    </div>
    <div className="flex justify-center content-end">
      <HandImage />
    </div>
  </PanelContent>
);

const GetAccountInfo = ({ noinfo, clickHandler, saveEmail }) => (
  <PanelContent>
    <div className="flex mb-6">
      <h2 className="flex-1 text-2xl font-semibold text-primary">
        <Trans id="auth.signup.recovery" defaults="Forgot Password" />
      </h2>
    </div>
    <I18n>
      {({ i18n }) => (
        <div>
          <TextField
            label={i18n._(t('auth.signup.email')`Email Address`)}
            name="email"
            onChange={saveEmail}
          />
        </div>
      )}
    </I18n>
    {noinfo ? (
      <div className="text-sm text-danger mb-2">
        <Trans
          id={noinfo ? 'auth.signin.recoveryerror' : ''}
          defaults="We need this information to find your account."
        />
      </div>
    ) : (
      <div className="h-6" />
    )}
    <Button onClick={clickHandler} size="small" typography="none" fullWidth>
      <Trans id="auth.signin.help" defaults="Send Help!" />
    </Button>
  </PanelContent>
);

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displaySuccess: false, email: '', noinfo: false };
  }

  clickHandler = (e) => {
    e.preventDefault();
    this.state.email.trim() === ''
      ? this.setState({ noinfo: true })
      : this.setState({ displaySuccess: true });
  };

  saveEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  componentDidMount() {
    this.setState({ displaySuccess: false, email: '', noinfo: false });
  }

  render() {
    return (
      <div className="h-screen bg-gradient-primary py-3">
        <div className="container">
          <SignUp />
          <div className="md:flex md:flex-col md:items-center">
            <TitleMessage
              id="auth.signin.recovery"
              defaults="Oh no! Looks like you forgot your password! Enter your email to get a recovery link!"
            />
            <div className="px-2 md:w-3/5 lg:w-1/3">
              <Panel floating>
                {this.state.displaySuccess ? (
                  <SendResetLink />
                ) : (
                  <GetAccountInfo
                    noinfo={this.state.noinfo}
                    clickHandler={this.clickHandler}
                    saveEmail={this.saveEmail}
                  />
                )}
              </Panel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
