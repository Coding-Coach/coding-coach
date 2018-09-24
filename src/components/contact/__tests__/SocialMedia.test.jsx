import React from 'react';
import { render } from 'react-testing-library';
import SocialMedia from '../SocialMedia';

test('renders the contact page', () => {
  const { container } = render(<SocialMedia />);

  expect(container.firstChild).toMatchSnapshot();
  expect(container.querySelectorAll('a')[0].getAttribute('href')).toEqual(process.env.REACT_APP_FB_URL);
  expect(container.querySelectorAll('a')[1].getAttribute('href')).toEqual(process.env.REACT_APP_INSTA_URL);
  expect(container.querySelectorAll('a')[2].getAttribute('href')).toEqual(process.env.REACT_APP_TWITTER_URL);
});