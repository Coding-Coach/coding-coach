import React from 'react';
import { render } from 'react-testing-library';
import Home from '../Home';

test('renders the Home page', () => {
  const { getByText } = render(<Home />);

  expect(getByText('About')).toBeInTheDocument();
  expect(getByText('Mission')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
});
