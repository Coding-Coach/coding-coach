import React from 'react';
import { render } from 'react-testing-library';
import { Panel, PanelContent } from '../Panel';

test('Renders basic panel', () => {
  const { container, queryByText } = render(<Panel>A basic Panel</Panel>);

  expect(container.firstChild).toMatchSnapshot();
  expect(queryByText('A basic Panel')).toBeDefined();
});
