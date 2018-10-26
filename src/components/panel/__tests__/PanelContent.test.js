import React from 'react';
import { render } from 'react-testing-library';
import Content from '../PanelContent';

test('renders the PanelContent component', () => {
  const { container } = render(<Content />);

  expect(container.firstChild).toMatchSnapshot();

  const div = container.querySelectorAll('div');
  expect(div.length).toEqual(1);
});
