import React from 'react';
import { render } from 'react-testing-library';
import Header from '../PanelHeader';

test('renders the PanelHeader component', () => {
  const { container } = render(<Header />);

  expect(container.firstChild).toMatchSnapshot();

  const h2 = container.querySelectorAll('h2');
  expect(h2.length).toEqual(1);
});
