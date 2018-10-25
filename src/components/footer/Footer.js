import React from 'react';
import { translate, Interpolate, Trans } from 'react-i18next';
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

const createTrigger = (type, t) => {
  return (
    <a href={'#' + type} className={styles.footerLink}>
      {t(`footer-${type}`)}
    </a>
  );
};

const freePrivacyPolicyLink = (t) => (
  <a target="_blank" href={constant.legal.PRIVACY_POLICY_URL} rel="noopener noreferrer">
    {t('free-privacy-policy')}
  </a>
);

const createPanel = (type, detail, t) => {
  const closeBtn = <Button>{t('close')}</Button>;
  return (
    <Panel trigger={createTrigger(type, t)} modal closable closeAction={closeBtn} key={type}>
      <Panel.Header>{t(`footer-${type}`)}</Panel.Header>
      <Panel.Content classes={classes}>
        <p>
          {type === 'privacy' ? (
            <Interpolate
              i18nKey={detail}
              lineBreak={doubleLineBreak}
              freePrivacyPolicy={freePrivacyPolicyLink(t)}
            />
          ) : (
            <Trans>
              <strong>What Are Cookies</strong>
              <br />
              <br />
              As is common practice with almost all professional websites this site uses cookies,
              which are tiny files that are downloaded to your computer, to improve your experience.
              This page describes what information they gather, how we use it and why we sometimes
              need to store these cookies. We will also share how you can prevent these cookies from
              being stored however this may downgrade or 'break' certain elements of the sites
              functionality.
              <br />
              <br />
              For more general information on cookies see the Wikipedia article on HTTP Cookies.
              <br />
              <br />
              <strong>How We Use Cookies</strong>
            </Trans>
          )}
        </p>
      </Panel.Content>
    </Panel>
  );
};

const Footer = ({ t }) => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        {footerItems.map((item) => createPanel(item.type, item.detail, t))}
      </div>
    </footer>
  );
};

export default translate('translations')(Footer);
