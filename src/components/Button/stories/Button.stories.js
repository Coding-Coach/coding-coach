import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './container-story';

import Button from './../';

storiesOf('Buttons', module).add('Button Types', () => (
  <Container title="Button Types">
    <Button disabled>Disabled Button</Button>
    <Button type="danger">Danger Button</Button>
    <Button>Primary Button</Button>
    <Button type="secondary">Secondary Button</Button>
  </Container>
));

storiesOf('Buttons', module).add('Button Sizes', () => (
  <Container title="Button Types">
    <Button disabled>Disabled Button</Button>
    <Button type="danger">Danger Button</Button>

    <Button>Secondary Button</Button>
  </Container>
));
