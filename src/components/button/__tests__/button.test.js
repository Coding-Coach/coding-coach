import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from './../';

test('renders the button component', () => {
  const { container } = render(<Button>CLICK ME</Button>);
  expect(container).toMatchSnapshot();
});

test('Handle Click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>SUBMIT</Button>);
  fireEvent.click(getByText('SUBMIT'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
