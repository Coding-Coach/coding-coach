import React from 'react';
import { translate, Interpolate } from 'react-i18next';
import 'i18n/i18n';
import Panel from 'components/panel/Panel';
import Button from 'components/button/Button';
import styles from './footer.scss';
import constant from 'config/constants';

const Footer = ({ t }) => {
  const createTrigger = (type) => {
    return (
      <a href={'#' + type} className={styles.footerLink}>
        {t(`footer-${type}`)}
      </a>
    );
  };

  const doubleLineBreak = (
    <React.Fragment>
      <br /> <br />{' '}
    </React.Fragment>
  );
  const closeBtn = <Button>{t('close')}</Button>;
  const freePrivacyPolicyLink = (
    <a target="_blank" href={constant.privacyPolicy.PRIVACY_POLICY_URL} rel="noopener noreferrer">
      {t('free-privacy-policy')}
    </a>
  );
  const classes = { content: styles.bodyBorder };

  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerInner}>
        <a href="#terms" className={styles.footerLink}>
          {t('footer-terms')}
        </a>
        <a href="#cookies" className={styles.footerLink}>
          {t('footer-cookies')}
        </a>
        <Panel
          trigger={createTrigger('privacy')}
          modal={true}
          closable={true}
          closeAction={closeBtn}
        >
          <Panel.Header>{t('footer-privacy')}</Panel.Header>
          <Panel.Content classes={classes}>
            <p>
              {' '}
              <Interpolate
                i18nKey="privacy-policy"
                lineBreak={doubleLineBreak}
                freePrivacyPolicy={freePrivacyPolicyLink}
              />
            </p>
          </Panel.Content>
        </Panel>
      </div>
    </footer>
  );
};

export default translate('translations')(Footer);
