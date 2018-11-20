import React from 'react';
import { render } from 'react-testing-library';
import { I18nProvider } from '@lingui/react';
import { catalogs } from 'config/i18n';
import Home from '../Home';

test('renders the Home page', () => {
  const { getByText } = render(
    <I18nProvider language="en" catalogs={catalogs}>
      <Home />
    </I18nProvider>,
  );

  expect(getByText('About')).toBeDefined();
  expect(getByText('Mission')).toBeDefined();
  expect(getByText('Contact')).toBeDefined();
});
