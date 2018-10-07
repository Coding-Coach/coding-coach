import React from 'react';
import { render } from 'react-testing-library';
import Contact from '../Contact';

test('renders the contact component', () => {
  const altText = 'Person using a magnifying glass to see the details of another guy';
  const { getByText, getByAltText } = render(<Contact />);

  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByAltText(altText, { exact: false })).toBeInTheDocument();
  expect(getByText(process.env.REACT_APP_EMAIL)).toBeInTheDocument();
});
