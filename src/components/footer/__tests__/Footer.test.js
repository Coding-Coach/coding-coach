import React from 'react';
import { render } from 'react-testing-library';
import Footer from '../Footer';

test('renders the footer element', () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();

  const href = container.querySelectorAll('a');
  expect(href[0].getAttribute('href')).toEqual('#terms');
  expect(href[1].getAttribute('href')).toEqual('#cookies');
  expect(href[2].getAttribute('href')).toEqual('#privacy');
});
