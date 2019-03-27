import React from 'react';
import { render, cleanup } from 'react-testing-library';
import IconDashboard from 'components/icon/Dashboard';
import NavBar from '../NavBar';

afterEach(cleanup);

describe('pages/dashboard/navBar/NavBar', () => {
  it('should render the dashboard option', () => {
    const { getByText } = render(<NavBar currentPath="/app/dashboard" />);

    expect(getByText('dashboard.navigation.tab.home')).toBeTruthy();
  });

  it('should render the messages option', () => {
    const { getByText } = render(<NavBar currentPath="/app/dashboard" />);

    expect(getByText('dashboard.navigation.tab.messages')).toBeTruthy();
  });

  it('should render the mentorshipts option', () => {
    const { getByText } = render(<NavBar currentPath="/app/dashboard" />);

    expect(getByText('dashboard.navigation.tab.mentorships')).toBeTruthy();
  });
  it('should render the settings option', () => {
    const { getByText } = render(<NavBar currentPath="/app/dashboard" />);

    expect(getByText('dashboard.navigation.tab.settings')).toBeTruthy();
  });
  it('should render the logout option', () => {
    const { getByText } = render(<NavBar currentPath="/app/dashboard" />);

    expect(getByText('dashboard.navigation.tab.logout')).toBeTruthy();
  });
});
