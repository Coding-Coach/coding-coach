import React from 'react';
import { render } from 'react-testing-library';
import DonateButton from '../DonateButton';

describe('components/footer/DonateButton', () => {
  it('should render the donate button', () => {
    const { container } = render(<DonateButton />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
