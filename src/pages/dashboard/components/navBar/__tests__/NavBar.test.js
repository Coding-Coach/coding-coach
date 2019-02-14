import React from 'react';
import { render, cleanup } from 'react-testing-library';
import IconDashboard from 'components/icon/Dashboard';
import NavBar from '../NavBar';

afterEach(cleanup);

test('renders the NavBar according the configuration', () => {
  const tabsArray = [1, 2, 3, 4];
  const tabsConfig = tabsArray.map((element, index) => ({
    name: `name ${index}`,
    label: `Label for ${index}`,
    path: '/fake_path',
    icon: IconDashboard,
  }));

  const navbarConfiguration = {
    tabs: tabsConfig.map((element, index) => ({
      name: `name ${index}`,
      label: `Label for ${index}`,
      path: '/fake_path',
      icon: IconDashboard,
      selected: true,
    })),
  };

  const { getByText } = render(<NavBar configuration={navbarConfiguration} />);
  tabsConfig.map((el, index) => {
    getByText(el.label);
  });
});
