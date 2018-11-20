import React from 'react';
import Config from 'config/constants';
import Image from 'components/image/Image';

/**
 * @TODO: We are removing this component for now, there are some
 * issues with the paypal account, once resolved we will put it back
 * in the footer
 */
function DonateButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={Config.payments.paypal} />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        alt={'footer-donate-paypal'}
      />
      <Image alt={'footer-donate'} src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" />
    </form>
  );
}

export default DonateButton;
