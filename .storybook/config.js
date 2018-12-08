import { configure, addDecorator } from '@storybook/react';
import 'theme/index.css';

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
