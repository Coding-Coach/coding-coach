import React from 'react';
import { render, fireEvent, waitForElement, wait, getByTestId } from 'react-testing-library';
import Panel from '../Panel';

test('renders the basic Panel component', () => {
  const { container } = render(
    <Panel trigger={<button>Open Panel</button>} closable={true} modal={true}>
      A basic Panel
    </Panel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Rendered Panel with trigger prop should have trigger element', () => {
  const { queryByText } = render(
    <Panel trigger={<button>Open Panel</button>} closable={true} modal={true}>
      A basic Panel
    </Panel>,
  );

  const triggerBtn = queryByText('Open Panel');
  expect(triggerBtn).toBeInTheDocument();
});

test('Rendered modal Panel should open the modal when trigger element is clicked ', async () => {
  const { queryByText } = render(
    <Panel trigger={<button>Open Panel</button>} closable={true} modal={true}>
      A basic Panel
    </Panel>,
  );

  const triggerBtn = queryByText('Open Panel');
  fireEvent.click(triggerBtn);
  const panel = await waitForElement(() => queryByText('A basic Panel'));
  expect(panel).toBeInTheDocument();
});

test('Rendered modal should close when x icon is clicked', async () => {
  const handleClick = jest.fn();
  const { queryByText, container } = render(
    <Panel onClose={handleClick} trigger={<button>Open Panel</button>} closable={true} modal={true}>
      A basic Panel
    </Panel>,
  );

  // Open the modal window
  const triggerBtn = queryByText('Open Panel');
  fireEvent.click(triggerBtn);
  const panel = await waitForElement(() => queryByText('A basic Panel'));

  const closeIcon = container.querySelector('i');
  fireEvent.click(closeIcon);
  expect(handleClick).toHaveBeenCalledTimes(1);
  await wait(() => expect(queryByText(/A basic Panel/i)).not.toBeInTheDocument());
  expect(queryByText('A basic Panel')).not.toBeInTheDocument();
});

test('Rendered modal should close when ESC is pressed', async () => {
  const handleClick = jest.fn();
  const { queryByText, container } = render(
    <Panel onClose={handleClick} trigger={<button>Open Panel</button>} closable={true} modal={true}>
      A basic Panel
    </Panel>,
  );

  // Open the modal window
  const triggerBtn = queryByText('Open Panel');
  fireEvent.click(triggerBtn);
  const panel = await waitForElement(() => queryByText('A basic Panel'));

  fireEvent.keyDown(document, { keyCode: 27 });
  expect(handleClick).toHaveBeenCalled();
  await wait(() => expect(queryByText(/A basic Panel/i)).not.toBeInTheDocument());
  expect(queryByText('A basic Panel')).not.toBeInTheDocument();
});

test('Renders basic panel without modal functionality', () => {
  const { container, queryByText } = render(<Panel modal={false}>A basic Panel</Panel>);

  expect(container.firstChild).toMatchSnapshot();
  expect(queryByText('A basic Panel')).toBeInTheDocument();
});
