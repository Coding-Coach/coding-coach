import React from 'react';
import { render } from 'react-testing-library';
import Contact from '../Contact';

test('renders the contact page', () => {
  const { getByText, getByAltText } = render(<Contact />);

  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByAltText('people search logo')).toBeInTheDocument();
  expect(getByText(process.env.REACT_APP_EMAIL)).toBeInTheDocument();
});
