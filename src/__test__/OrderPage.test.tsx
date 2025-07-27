
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as useOrderTableHook from '../utils/orders';
import { store } from '../redux/store';
import OrderPage from '../pages/Orders';
import { vi, describe, expect,beforeEach, test, type Mock } from 'vitest';

vi.mock('../utils/orders', () => ({
  useOrderTable: vi.fn(),
}));

const mockOrders = [
  {
    id: '#CMP801',
    user: 'Natall Craig',
    avatar: '/avatar1.png',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'inProgress',
  },
];

const renderWithProviders = (ui: React.ReactElement) => {
  const theme = createTheme({ palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      
    },
    custom: {
      grey: '#1C1C1C0D',
      lineGrey:"rgba(28, 28, 28, 0.1)",
      secondary:'#000000',
      secondaryBg:"#f7f9fb"
    },
  }});

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>
  );
};

describe('OrderPage', () => {
  beforeEach(() => {
    // cast to Vitest’s Mock
    const useOrderTableMock = vi.mocked(useOrderTableHook.useOrderTable) as Mock;
    useOrderTableMock.mockReturnValue({
      page: 1,
      setPage: vi.fn(),
      filterText: '',
      setFilterText: vi.fn(),
      sortBy: '',
      sortOrder: 'asc',
      setSortBy: vi.fn(),
      setSortOrder: vi.fn(),
      paginatedData: mockOrders,
      totalRows: 10,
      selectedRows: [],
      setSelectedRows: vi.fn(),
    });
  });

  test('renders OrderPage with heading and table rows', () => {
    renderWithProviders(<OrderPage />);
    expect(screen.getByText('Order List')).toBeInTheDocument();
    expect(screen.getByText('#CMP801')).toBeInTheDocument();
    expect(screen.getByText('Landing Page')).toBeInTheDocument();
  });

 
});
