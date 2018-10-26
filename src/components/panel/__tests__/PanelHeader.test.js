import React from 'react';
import { render } from 'react-testing-library';
import Header from '../PanelHeader';

test.only('renders the PanelHeader component', () => {
  const { container } = render(<Header />);

  expect(container.firstChild).toMatchSnapshot();

  const header = container.querySelectorAll('header');
  expect(header.length).toEqual(1);
  const h2 = container.querySelectorAll('h2');
  expect(h2.length).toEqual(1);
});
