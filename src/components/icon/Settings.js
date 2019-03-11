import React from 'react';
import Icon from './Icon.js';

export default function Dashboard({ active, ...props }) {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <g id="settings" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(19.000000, 19.000000)">
          <path
            d="M25.0181818,14.3082153 L25.0181818,10.7099665 L21.4167042,10.3286239 C21.1920879,9.40772191 20.8282973,8.54138026 20.349011,7.75302923 L22.6265523,4.93609417 L20.0821704,2.39171232 L17.2651526,4.66925365 C16.4768016,4.18996736 15.6103771,3.82625951 14.6894751,3.60156042 L14.3082153,0 L10.7099665,0 L10.3286239,3.60147763 C9.40772191,3.82609393 8.54138026,4.18988456 7.75302923,4.66917086 L4.93601138,2.39162952 L2.39162952,4.93601138 L4.66917086,7.75294643 C4.18988456,8.54129747 3.82617672,9.40772191 3.60147763,10.3285411 L0,10.7099665 L0,14.3082153 L3.60147763,14.6895579 C3.82609393,15.6104599 4.18988456,16.4768016 4.66917086,17.2651526 L2.39162952,20.0821704 L4.93601138,22.6265523 L7.75294643,20.349011 C8.54129747,20.8282973 9.40772191,21.1920051 10.3285411,21.4167042 L10.7098838,25.0181818 L14.3081325,25.0181818 L14.6894751,21.4167042 C15.6103771,21.1920879 16.4767188,20.8282973 17.2651526,20.349011 L20.0821704,22.6265523 L22.6265523,20.0821704 L20.349011,17.2652354 C20.8282973,16.4768844 21.1920051,15.6104599 21.4167042,14.6896407 L25.0181818,14.3082153 Z M12.5091323,16.7243514 C10.1810875,16.7243514 8.29391321,14.8370943 8.29391321,12.5091323 C8.29391321,10.1811703 10.1811703,8.29391321 12.5091323,8.29391321 C14.8370943,8.29391321 16.7243514,10.1811703 16.7243514,12.5091323 C16.7243514,14.8370943 14.8370943,16.7243514 12.5091323,16.7243514 Z"
            fill={active ? '#32B88C' : '#BFBFBF'}
            fillRule="nonzero"
          />
          <path
            d="M25.8,14.3082153 L25.8,10.7099665 L21.9734174,10.3286239 C21.7347618,9.40772191 21.3482329,8.54138026 20.8389895,7.75302923 L23.2588852,4.93609417 L20.5554706,2.39162952 L17.5623792,4.66917086 C16.7247534,4.18988456 15.8041744,3.82617672 14.8258008,3.60147763 L14.4206229,0 L12.5090909,0 L12.5090909,8.29391321 C14.9826467,8.29391321 16.987776,10.1811703 16.987776,12.5091323 C16.987776,14.8370943 14.9825587,16.7243514 12.5090909,16.7243514 L12.5090909,25.0181818 L14.4207109,25.0181818 L14.8258888,21.4167042 C15.8043504,21.1920879 16.7248414,20.8282973 17.5624672,20.349011 L20.5555585,22.6265523 L23.2589732,20.0821704 L20.8390775,17.2652354 C21.3483209,16.4768844 21.7348497,15.6104599 21.9735053,14.6896407 L25.8,14.3082153 Z"
            fill={active ? '#179A6F' : '#898889'}
          />
          <path
            d="M43,29.9472323 L43,25.5618586 L38.6106384,25.0971007 C38.3368849,23.9747528 37.893562,22.9188701 37.309416,21.9580325 L40.0851688,18.5248559 L36.984235,15.4239221 L33.5510584,18.1996749 C32.5902209,17.6155289 31.5343381,17.172206 30.4119902,16.8984525 L29.9472323,12.5090909 L25.5618586,12.5090909 L25.0971007,16.8984525 C23.9747528,17.172206 22.9188701,17.6155289 21.9580325,18.1996749 L18.5248559,15.4239221 L15.4239221,18.5248559 L18.1996749,21.9580325 C17.6155289,22.9188701 17.172206,23.9747528 16.8984525,25.0971007 L12.5090909,25.5618586 L12.5090909,29.9472323 L16.8984525,30.4119902 C17.172206,31.5343381 17.6155289,32.5902209 18.1996749,33.5510584 L15.4239221,36.984235 L18.5248559,40.0851688 L21.9580325,37.309416 C22.9188701,37.893562 23.9747528,38.3368849 25.0971007,38.6106384 L25.5618586,43 L29.9472323,43 L30.4119902,38.6106384 C31.5343381,38.3368849 32.5902209,37.893562 33.5510584,37.309416 L36.984235,40.0851688 L40.0851688,36.984235 L37.309416,33.5510584 C37.893562,32.5902209 38.3368849,31.5343381 38.6106384,30.4119902 L43,29.9472323 Z M27.7545455,32.8918898 C24.9173124,32.8918898 22.6172011,30.5918616 22.6172011,27.7545455 C22.6172011,24.9172293 24.9172293,22.6172011 27.7545455,22.6172011 C30.5918616,22.6172011 32.8918898,24.9172293 32.8918898,27.7545455 C32.8918898,30.5918616 30.5917785,32.8918898 27.7545455,32.8918898 Z"
            fill={active ? '#69D5B1' : '#DDDCDC'}
            fillRule="nonzero"
          />
          <path
            d="M43,29.9472323 L43,25.5618586 L38.4981759,25.0971007 C38.217403,23.9747528 37.7627129,22.9188701 37.1635888,21.9580325 L40.0105147,18.5248559 L36.8300699,15.4239221 L33.308863,18.1996749 C32.3233887,17.6155289 31.240432,17.172206 30.0893059,16.8984525 L29.6125459,12.5090909 L27.3636364,12.5090909 L27.3636364,22.6172011 C30.273619,22.6172011 32.6327075,24.9172293 32.6327075,27.7545455 C32.6327075,30.5918616 30.2737042,32.8918898 27.3636364,32.8918898 L27.3636364,43 L29.6125459,43 L30.0892207,38.6106384 C31.2403468,38.3368849 32.3233034,37.893562 33.3087778,37.309416 L36.8299846,40.0851688 L40.0104295,36.984235 L37.1635036,33.5510584 C37.7626277,32.5902209 38.2173178,31.5343381 38.4980907,30.4119902 L43,29.9472323 Z"
            fill={active ? '#32B88C' : '#BFBFBF'}
          />
        </g>
      </g>
    </Icon>
  );
}
