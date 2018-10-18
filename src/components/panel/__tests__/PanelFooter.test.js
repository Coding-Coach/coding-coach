import React from 'react';
import { render } from 'react-testing-library';
import Footer from '../PanelFooter';

test('renders the PanelFooter component', () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();

  const section = container.querySelectorAll('section');
  expect(section.length).toEqual(1);
});
