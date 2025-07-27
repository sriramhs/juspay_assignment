import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashBoard from '../pages/Dashboard';

// 🧪 Mock all child components
vi.mock('../components/StatsGrid', () => ({
  __esModule: true,
  default: () => <div data-testid="StatsGrid" />,
}));

vi.mock('../components/RevenueChart', () => ({
  __esModule: true,
  default: () => <div data-testid="RevenueChart" />,
}));

vi.mock('../components/TotalSales', () => ({
  __esModule: true,
  default: () => <div data-testid="TotalSalesChart" />,
}));

vi.mock('../components/ProjectsionsBarChart', () => ({
  __esModule: true,
  ProjectionsVsActualsChart: () => <div data-testid="ProjectionsVsActualsChart" />,
}));

vi.mock('../components/TopSellingProducts', () => ({
  __esModule: true,
  default: () => <div data-testid="TopSellingProducts" />,
}));

vi.mock('../components/RevenueByLocation', () => ({
  __esModule: true,
  default: () => <div data-testid="RevenueByLocation" />,
}));

describe('DashBoard Page', () => {
  it('renders page title', () => {
    render(<DashBoard />);
    expect(screen.getByText('eCommerce')).toBeInTheDocument();
  });

  it('renders all major dashboard components', () => {
    render(<DashBoard />);
    expect(screen.getByTestId('StatsGrid')).toBeInTheDocument();
    expect(screen.getByTestId('RevenueChart')).toBeInTheDocument();
    expect(screen.getByTestId('TotalSalesChart')).toBeInTheDocument();
    expect(screen.getByTestId('ProjectionsVsActualsChart')).toBeInTheDocument();
    expect(screen.getByTestId('TopSellingProducts')).toBeInTheDocument();
    expect(screen.getByTestId('RevenueByLocation')).toBeInTheDocument();
  });
});
