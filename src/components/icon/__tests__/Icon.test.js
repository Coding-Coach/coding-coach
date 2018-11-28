import React from 'react';
import { render } from 'react-testing-library';
import Icon from '../Icon';

describe('components/icon/Icon', () => {
  it('should render the icon', () => {
    const { container } = render(<Icon />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should set the title', () => {
    const { getByText } = render(<Icon title="testing" />);

    expect(getByText('testing')).toBeTruthy();
  });

  it('should render vectors', () => {
    const { container } = render(<Icon vectors="123" />);

    expect(container.querySelector('path[d="123"]')).toBeTruthy();
  });
});
