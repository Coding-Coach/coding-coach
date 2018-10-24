import React from 'react';
import { render } from 'react-testing-library';
import SocialMedia from '../components/SocialMedia';
import config from 'config/constants';

test('renders the social media icons', () => {
  const { container } = render(<SocialMedia />);

  expect(container.firstChild).toMatchSnapshot();

  const href = container.querySelectorAll('a');
  expect(href[0].getAttribute('href')).toEqual(config.social.FB_URL);
  expect(href[1].getAttribute('href')).toEqual(config.social.INSTA_URL);
  expect(href[2].getAttribute('href')).toEqual(config.social.TWITTER_URL);
});
