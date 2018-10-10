import React from 'react';
import { render } from 'react-testing-library';
import Header from 'component/panel/PanelHeader';

test('renders the PanelHeader component', () => {
  const { container } = render(<Header />);

  expect(container.firstChild).toMatchSnapshot();
});
