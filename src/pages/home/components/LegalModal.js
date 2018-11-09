import React from 'react';
import { func, oneOf } from 'prop-types';

import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'components/panel/Panel';
import { PrivacyPolicy } from 'pages/static/PrivacyPolicy';
import { CookiesPolicy } from 'pages/static/CookiesPolicy';
import { TermsAndConditions } from 'pages/static/TermsAndConditions';
import styles from './LegalModal.module.scss';

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
        <PanelHeader>{`legal-${page}`}</PanelHeader>
        <PanelContent>
          <Content />
        </PanelContent>
        <PanelFooter>
          <Button size="small" onClick={onClose}>
            {'close'}
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

export default LegalModal;
