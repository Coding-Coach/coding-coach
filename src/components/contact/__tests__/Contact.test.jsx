import React from 'react';
import { render, getByText } from 'react-testing-library';
import Contact from '../Contact';

test('renders the contact page', () => {
  const { container } = render(<Contact />);

  expect(container, 'Contact').toBeInTheDocument();
});