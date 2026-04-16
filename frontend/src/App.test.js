import { render, screen } from '@testing-library/react';
import App from './App';

// Mock recharts to avoid SVG rendering issues in jsdom
jest.mock('recharts', () => {
  const React = require('react');
  return {
    ResponsiveContainer: ({ children }) => <div>{children}</div>,
    AreaChart:           ({ children }) => <div>{children}</div>,
    Area:                ()             => null,
    XAxis:               ()             => null,
    YAxis:               ()             => null,
    CartesianGrid:       ()             => null,
    Tooltip:             ()             => null,
    PieChart:            ({ children }) => <div>{children}</div>,
    Pie:                 ()             => null,
    Cell:                ()             => null,
    Legend:              ()             => null,
  };
});

// Mock axios so no real network calls are made
jest.mock('./api', () => ({
  getExpenses:   () => Promise.resolve({ data: [] }),
  addExpense:    (d) => Promise.resolve({ data: { ...d, _id: 'test-id' } }),
  deleteExpense: () => Promise.resolve({}),
}));

test('renders the FinTrack dashboard heading', async () => {
  render(<App />);
  // The sidebar logo text should be present
  expect(screen.getByText(/FinTrack/i)).toBeInTheDocument();
});

test('renders Add Expense button in topbar', () => {
  render(<App />);
  expect(screen.getByText(/\+ Add Expense/i)).toBeInTheDocument();
});