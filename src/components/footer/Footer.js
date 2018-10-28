import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import 'i18n/i18n';

import Button from 'components/button/Button';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'components/panel/Panel';
import Modal from 'components/modal/Modal';
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

  toggleModal = () => {
    const { show } = this.state.modal;
    this.setState({ modal: { show: !show } });
  };

  renderModalByOption = (option, t) => {
    return (
      <Modal onClose={this.toggleModal}>
        <Panel>
          <PanelHeader>{t(`footer-${option}`)}</PanelHeader>
          <PanelContent>
            <Interpolate
              i18nKey={option}
              lineBreak={
                <React.Fragment>
                  <br />
                </React.Fragment>
              }
            />
            doubleLineBreak=
            {
              <React.Fragment>
                <br />
                <br />
              </React.Fragment>
            }
            />
          </PanelContent>
          <PanelFooter>
            <Button size="small" onClick={this.toggleModal}>
              {t('close')}
            </Button>
          </PanelFooter>
        </Panel>
      </Modal>
    );
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
