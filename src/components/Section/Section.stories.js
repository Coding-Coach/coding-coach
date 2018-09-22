import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './Section';

storiesOf('Section', module)
  .add('Transparent background', () => {
    return <Section>works!</Section>;
  })
  .add('White background', () => {
    return <Section>works!</Section>;
  })
  .add('Grey background', () => {
    return <Section>works!</Section>;
  })
  .add('Water Main color background', () => {
    return <Section>works!</Section>;
  });
