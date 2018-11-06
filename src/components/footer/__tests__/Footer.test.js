import React from 'react';
import { render } from 'react-testing-library';
import Footer from '../Footer';

test('renders the footer element', () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();
});
