import React from 'react';
import { translate } from 'react-i18next';
import 'i18n/i18n';
import Config from 'config/constants';
import Image from 'components/image/Image';

function DonateButton({ t }) {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={Config.payments.paypal} />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        alt={t('footer-donate-paypal')}
      />
      <Image alt={t('footer-donate')} src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" />
    </form>
  );
}

export default translate('translations')(DonateButton);
