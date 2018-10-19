import React from 'react';
import { translate } from 'react-i18next';
import Config from 'config/constants';
import 'i18n/i18n';

import Image from 'components/image/Image';

import styles from './footer.scss';

const Footer = ({ t }) => (
  <footer className={styles.footerMain}>
    <div className={styles.footerInner}>
      <div className={styles.column}>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={Config.payments.paypal} />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <Image alt="Donate!" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" />
        </form>
      </div>
      <div className={styles.column}>
        <a href="#terms" className={styles.footerLink}>
          {t('footer-terms')}
        </a>
        <a href="#cookies" className={styles.footerLink}>
          {t('footer-cookies')}
        </a>
        <a href="#privacy" className={styles.footerLink}>
          {t('footer-privacy')}
        </a>
      </div>
    </div>
  </footer>
);

export default translate('translations')(Footer);
