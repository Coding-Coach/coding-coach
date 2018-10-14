import React from 'react';
import { render } from 'react-testing-library';
import Image from '../Image';

describe('components/Image', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Image src="test.jpg" alt="A simple test" className="test-class" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Image', () => {
    const { container } = render(
      <Image src="test.jpg" alt="A simple test" className="test-class" />,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.getAttribute('src')).toEqual('test.jpg');
    expect(container.firstChild.getAttribute('alt')).toEqual('A simple test');
    expect(container.firstChild.getAttribute('class')).toEqual('test-class');
  });
});
