import React from 'react';
import { render } from 'react-testing-library';
import HomeSection from '../components/HomeSection';
import config from 'config/constants';

test('renders the home page section', () => {
  const { container } = render(<HomeSection />);
  expect(container.firstChild).toMatchSnapshot();
});
