import React from 'react';
import { render } from 'react-testing-library';
import Footer from '../PanelFooter';

test('renders the PanelFooter component', () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchSnapshot();

  const footer = container.querySelectorAll('footer');
  expect(footer.length).toEqual(1);
});
