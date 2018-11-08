import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from './container-story';
import { withDocs } from 'storybook-readme';
import ButtonReadme from './button.README.md';

import Button from './../Button';
import styles from './styles.scss';
storiesOf('Buttons', module).add(
  'Button Types',
  withDocs(ButtonReadme, () => (
    <Container title="Button Types">
      <Button disabled>Disabled Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button>Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="tertiary">Tertiary Button</Button>
    </Container>
  )),
);

storiesOf('Buttons', module).add('Button Sizes', () => (
  <div>
    <Container title="Primary Button Sizes">
      <Button>Default Size</Button>
      <Button size="large">Large Button</Button>
      <Button size="small">Small Button</Button>
    </Container>

    <Container title="Secondary Button Sizes">
      <Button type="secondary">Default Size</Button>
      <Button type="secondary" size="large">
        Large Button
      </Button>
      <Button type="secondary" size="small">
        Small Button
      </Button>
    </Container>

    <Container title="Tertiary Button Sizes">
      <Button type="tertiary">Default Size</Button>
      <Button type="tertiary" size="large">
        Large Button
      </Button>
      <Button type="tertiary" size="small">
        Small Button
      </Button>
    </Container>

    <Container title="Danger Button Sizes">
      <Button type="danger">Default Size</Button>
      <Button type="danger" size="large">
        Large Button
      </Button>
      <Button type="danger" size="small">
        Small Button
      </Button>
    </Container>

    <Container title="Disabled Button Sizes">
      <Button disabled>Default Size</Button>
      <Button disabled size="large">
        Large Button
      </Button>
      <Button disabled size="small">
        Small Button
      </Button>
    </Container>

    <Container title="Full Width Buttons">
      <Button type="primary" fullWidth>
        Default Size
      </Button>
      <Button type="secondary" fullWidth>
        Default Size
      </Button>
      <Button type="danger" fullWidth>
        Default Size
      </Button>
    </Container>
  </div>
));

storiesOf('Buttons', module).add('Button Shapes', () => (
  <div>
    <Container title="Primary">
      <Button type="primary" shape="square">
        Square shape
      </Button>
      <Button type="primary" shape="rounded">
        Rounded shape
      </Button>
      <Button type="primary" shape="pill">
        Pill shape
      </Button>
    </Container>

    <Container title="Secondary">
      <Button type="secondary" shape="square">
        Square shape
      </Button>
      <Button type="secondary" shape="rounded">
        Rounded shape
      </Button>
      <Button type="secondary" shape="pill">
        Pill shape
      </Button>
    </Container>

    <Container title="Danger">
      <Button type="danger" shape="square">
        Square shape
      </Button>
      <Button type="danger" shape="rounded">
        Rounded shape
      </Button>
      <Button type="danger" shape="pill">
        Pill shape
      </Button>
    </Container>
  </div>
));

storiesOf('Buttons', module).add('Button Composites', () => (
  <div>
    <Container title="Button Composites">
      <Button>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        With Some Icon
      </Button>

      <Button onClick={() => alert('You clickedMe')}>Click</Button>
    </Container>
  </div>
));
