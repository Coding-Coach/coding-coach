import React from 'react';
import Icon from './Icon.js';

export default function CCLogo(props) {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <g id="dismiss" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(19.000000, 19.000000)">
          <circle fill="#EA7A71" fillRule="nonzero" cx="21.5" cy="21.5" r="21.5" />
          <g transform="translate(14.000000, 14.000000)" fill="#FFFFFF">
            <polygon points="15 1.5 13.5 0 7.5 6 1.5 0 0 1.5 6 7.5 0 13.5 1.5 15 7.5 9 13.5 15 15 13.5 9 7.5" />
          </g>
        </g>
      </g>
    </Icon>
  );
}
