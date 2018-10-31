import React from 'react';
import { func, oneOf } from 'prop-types';
import { translate } from 'react-i18next';
import 'i18n/i18n';

import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'components/panel/Panel';
import { PrivacyPolicy } from 'pages/static/PrivacyPolicy';
import { CookiesPolicy } from 'pages/static/CookiesPolicy';
import { TermsAndConditions } from 'pages/static/TermsAndConditions';
import styles from './LegalModal.scss';

const classesPanel = { panelRoot: styles.panelRoot };

function LegalModal({ onClose, page, t }) {
  let Content = CookiesPolicy;

  if (page === 'terms-and-conditions') {
    Content = TermsAndConditions;
  }

  if (page === 'privacy-policy') {
    Content = PrivacyPolicy;
  }

  return (
    <Modal onClose={onClose}>
      <Panel classes={classesPanel}>
        <PanelHeader>{t(`legal-${page}`)}</PanelHeader>
        <PanelContent>
          <Content />
        </PanelContent>
        <PanelFooter>
          <Button size="small" onClick={onClose}>
            {t('close')}
          </Button>
        </PanelFooter>
      </Panel>
    </Modal>
  );
}

LegalModal.propTypes = {
  onClose: func,
  page: oneOf(['cookies', 'terms-and-conditions', 'privacy-policy']).isRequired,
};

export default translate('translations')(LegalModal);
