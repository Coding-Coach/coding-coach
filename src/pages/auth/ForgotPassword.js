import React from 'react';
import { Trans, t } from '@lingui/macro';
import { I18n } from '@lingui/react';

import Button from 'components/button/Button';
import TextField from 'components/textfield/TextField';
import { Panel, PanelContent } from 'components/panel/Panel';
import { SignUp, TitleMessage } from './Utilities';
import { ReactComponent as HandImage } from '../home/assets/images/forgot-password.svg';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.getAccountInfo = this.getAccountInfo.bind(this);
    this.sendResetLink = this.sendResetLink.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
    this.renderDisplaySuccess = this.renderDisplaySuccess.bind(this);
    this.state = { displaySuccess: false, email: '', noinfo: false };
  }

  componentDidMount() {
    this.setState({ displaySuccess: false, email: '', noinfo: false });
  }

  clickHandler(e) {
    e.preventDefault();
    this.state.email.trim() === ''
      ? this.setState({ noinfo: true })
      : this.setState({ displaySuccess: true });
  }

  saveEmail(e) {
    this.setState({ email: e.target.value });
  }

  sendResetLink() {
    return (
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
  }

  getAccountInfo() {
    return (
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
                onChange={(event) => this.saveEmail(event)}
              />
            </div>
          )}
        </I18n>
        {this.state.noinfo ? (
          <div className="text-sm text-danger mb-2">
            <Trans
              id={this.state.noinfo ? 'auth.signin.recoveryerror' : ''}
              defaults="We need this information to find your account."
            />
          </div>
        ) : (
          <div className="h-6" />
        )}
        <Button onClick={this.clickHandler} size="small" typography="none" fullWidth>
          <Trans id="auth.signin.help" defaults="Send Help!" />
        </Button>
      </PanelContent>
    );
  }

  renderDisplaySuccess() {
    return this.state.displaySuccess ? this.sendResetLink() : this.getAccountInfo();
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
              <Panel floating>{this.renderDisplaySuccess()}</Panel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
