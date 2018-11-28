import React from 'react';
import { render } from 'react-testing-library';
import TextField from '../TextField';

describe('components/textfield/TextField', () => {
  it('should render the textfield', () => {
    const { container } = render(<TextField />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the label', () => {
    const { getByText } = render(<TextField label="Testing Label" />);

    // Check if is present
    expect(getByText('Testing Label')).toBeTruthy();
  });
});
