import React from 'react';
import Icon from './Icon.js';

export default function Close(props) {
  return (
    <Icon viewBox="0 0 43 43" {...props}>
      <polygon
        fill="currentColor"
        points="15 1.5 13.5 0 7.5 6 1.5 0 0 1.5 6 7.5 0 13.5 1.5 15 7.5 9 13.5 15 15 13.5 9 7.5"
        transform="translate(14 14)"
      />
    </Icon>
  );
}
