import React from 'react';
import { translate, Interpolate, Trans } from 'react-i18next';
import 'i18n/i18n';

import Markdown from 'markdown-to-jsx';
import Panel from 'components/panel/Panel';
import Button from 'components/button/Button';
import DonateButton from './DonateButton';
import styles from './footer.scss';
import constant from 'config/constants';
import CookiesPolicy from 'markdown/CookiesPolicy.md';

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

const createPanel = ({ type, detail, t }) => {
  return (
    <Panel trigger={createTrigger(type, t)} modal closable key={type}>
      <Panel.Header>{t(`footer-${type}`)}</Panel.Header>
      <Panel.Content>
        <p>
          {type === 'privacy' ? (
            <Interpolate
              i18nKey={detail}
              lineBreak={doubleLineBreak}
              freePrivacyPolicy={
                <a
                  target="_blank"
                  href={constant.legal.PRIVACY_POLICY_URL}
                  rel="noopener noreferrer"
                >
                  {t('free-privacy-policy')}
                </a>
              }
            />
          ) : (
            <Markdown options={{ forceBlock: true }}>
              ## The Cookies We Set - Account related cookies - If you create an account with us
              then we will use cookies for the management of the signup process and general
              administration. These cookies will usually be deleted when you log out however in some
              cases they may remain afterwards to remember your site preferences when logged out. -
              Login related cookies - We use cookies when you are logged in so that we can remember
              this fact. This prevents you from having to log in every single time you visit a new
              page. These cookies are typically removed or c
            </Markdown>
          )}
        </p>
      </Panel.Content>
      <Panel.Footer>
        <Button onClick={() => null}>{t('close')}</Button>
      </Panel.Footer>
    </Panel>
  );
};

const Footer = ({ t }) => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        <div className={styles.column}>
          <DonateButton />
        </div>
        {footerItems.map((item) => createPanel({ type: item.type, detail: item.detail, t }))}
      </div>
    </footer>
  );
};

export default translate('translations')(Footer);
