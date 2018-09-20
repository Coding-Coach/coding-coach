import React from 'react';
import { render } from 'react-testing-library';
import Contact from '../Contact';

test('renders the contact page', () => {
  const { getByText } = render(<Contact />);

  expect(getByText('Contact')).toBeInTheDocument();
});