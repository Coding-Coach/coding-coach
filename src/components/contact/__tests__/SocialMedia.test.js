import React from 'react';
import { render } from 'react-testing-library';
import SocialMedia, { FB_URL, TWITTER_URL, INSTA_URL } from '../SocialMedia';

test('renders the contact page', () => {
  const { container } = render(<SocialMedia />);

  expect(container.firstChild).toMatchSnapshot();

  const href = container.querySelectorAll('a');
  expect(href[0].getAttribute('href')).toEqual(FB_URL);
  expect(href[1].getAttribute('href')).toEqual(INSTA_URL);
  expect(href[2].getAttribute('href')).toEqual(TWITTER_URL);
});
