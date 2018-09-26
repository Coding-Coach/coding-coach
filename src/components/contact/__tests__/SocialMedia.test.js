import React from 'react';
import { render } from 'react-testing-library';
import SocialMedia from '../SocialMedia';

test('renders the contact page', () => {
  const { container } = render(<SocialMedia />);

  expect(container.firstChild).toMatchSnapshot();

  const href = container.querySelectorAll('a');
  expect(href[0].getAttribute('href')).toEqual(process.env.REACT_APP_FB_URL);
  expect(href[1].getAttribute('href')).toEqual(process.env.REACT_APP_INSTA_URL);
  expect(href[2].getAttribute('href')).toEqual(process.env.REACT_APP_TWITTER_URL);
});
