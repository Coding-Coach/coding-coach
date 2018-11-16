import React from 'react';
import { render } from 'react-testing-library';
import Home from '../Home';

test('renders the Home page', () => {
  const { getByText } = render(<Home />);

  expect(getByText('About')).toBeDefined();
  expect(getByText('Mission')).toBeDefined();
  expect(getByText('Contact')).toBeDefined();
});
