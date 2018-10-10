import React from 'react';
import { render, fireEvent, waitForElement, wait, getByTestId } from 'react-testing-library';
import Panel from '../Panel';

test('renders the basic Panel component', async () => {
  const handleClick = jest.fn();
  const { container, queryByText, debug } = render(
    <Panel onClose={handleClick} trigger={<button>Open Panel</button>} closable={true}>
      A basic Panel
    </Panel>,
  );

  expect(container.firstChild).toMatchSnapshot();

  const triggerBtn = queryByText('Open Panel');
  expect(triggerBtn).toBeInTheDocument();

  fireEvent.click(triggerBtn);
  const panel = await waitForElement(() => queryByText('A basic Panel'));

  const closeIcon = container.querySelector('i');
  fireEvent.click(closeIcon);
  expect(handleClick).toHaveBeenCalledTimes(1);
  await wait(() => expect(queryByText(/A basic Panel/i)).not.toBeInTheDocument());
  expect(queryByText('A basic Panel')).not.toBeInTheDocument();

  fireEvent.keyDown(document, { keyCode: 27 });
  expect(handleClick).toHaveBeenCalled();
  await wait(() => expect(queryByText(/A basic Panel/i)).not.toBeInTheDocument());
  expect(queryByText('A basic Panel')).not.toBeInTheDocument();
});
