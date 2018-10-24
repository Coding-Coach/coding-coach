import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import 'i18n/i18n';
import Panel from 'components/panel/Panel';
import Button from 'components/button/Button';
import styles from './footer.scss';
import constant from 'config/constants';

const classes = { content: styles.bodyBorder };

const footerItems = [
  { type: 'terms', detail: 'terms-policy' },
  { type: 'cookies', detail: 'cookies-policy' },
  { type: 'privacy', detail: 'privacy-policy' },
];

const doubleLineBreak = (
  <React.Fragment>
    <br />
    <br />
  </React.Fragment>
);

const Footer = ({ t }) => {
  const createTrigger = (type) => {
    return (
      <a href={'#' + type} className={styles.footerLink}>
        {t(`footer-${type}`)}
      </a>
    );
  };

  const createPanel = (type, detail) => (
    <Panel trigger={createTrigger(type)} modal closable closeAction={closeBtn} key={type}>
      <Panel.Header>{t(`footer-${type}`)}</Panel.Header>
      <Panel.Content classes={classes}>
        <p>
          <Interpolate
            i18nKey={detail}
            lineBreak={doubleLineBreak}
            freePrivacyPolicy={freePrivacyPolicyLink}
          />
        </p>
      </Panel.Content>
    </Panel>
  );

  const closeBtn = <Button>{t('close')}</Button>;

  const freePrivacyPolicyLink = (
    <a target="_blank" href={constant.legal.PRIVACY_POLICY_URL} rel="noopener noreferrer">
      {t('free-privacy-policy')}
    </a>
  );

  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        {footerItems.map((item) => createPanel(item.type, item.detail))}
      </div>
    </footer>
  );
};

export default translate('translations')(Footer);
