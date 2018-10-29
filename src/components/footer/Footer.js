import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import Modal from 'components/modal/Modal';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'components/panel/Panel';
import { PrivacyPolicy } from 'pages/static/PrivacyPolicy';
import { CookiesPolicy } from 'pages/static/CookiesPolicy';
import { TermsAndConditions } from 'pages/static/TermsAndConditions';
import Button from 'components/button/Button';
import DonateButton from './DonateButton';
import styles from './footer.scss';

class Footer extends React.Component {
  state = {
    modal: {
      show: false,
      option: undefined,
    },
  };

  openModal = (option) => {
    this.setState({
      modal: {
        show: true,
        option: option,
      },
    });
  };

  toggleModal = () => this.setState({ modal: { show: !this.state.modal.show } });

  renderModalByOption = (option, t) => {
    return (
      <Modal onClose={this.toggleModal}>
        <Panel>
          <PanelHeader>{t(`footer-${option}`)}</PanelHeader>
          <PanelContent>{this.getContentByOption(option)}</PanelContent>
          <PanelFooter>
            <Button size="small" onClick={this.toggleModal}>
              {t('close')}
            </Button>
          </PanelFooter>
        </Panel>
      </Modal>
    );
  };

  getContentByOption = (option) => {
    switch (option) {
      case 'terms-and-conditions':
        return <TermsAndConditions />;
      case 'cookies':
        return <CookiesPolicy />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      default:
        return null;
    }
  };

  render() {
    const { t } = this.props;
    const { modal } = this.state;

    return (
      <footer className={styles.footerMain}>
        <div className={styles.footerInner}>
          <div className={styles.column}>
            <DonateButton />
          </div>

          {modal.show && this.renderModalByOption(modal.option, t)}

          <a
            onClick={() => this.openModal('terms-and-conditions')}
            href={'#terms'}
            className={styles.footerLink}
          >
            {t('footer-terms-and-conditions')}
          </a>
          <a
            onClick={() => this.openModal('cookies')}
            href={'#cookies'}
            className={styles.footerLink}
          >
            {t('footer-cookies')}
          </a>
          <a
            onClick={() => this.openModal('privacy-policy')}
            href={'#privacy'}
            className={styles.footerLink}
          >
            {t('footer-privacy-policy')}
          </a>
        </div>
      </footer>
    );
  }
}

export default translate('translations')(Footer);
