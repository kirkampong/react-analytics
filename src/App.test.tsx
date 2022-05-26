import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('loading spinner is present before axios fetches json', () => {
  render(<App />);
  const spinner = screen.queryByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();
});

test('all required elements are eventually present in the page', async () => {
  render(<App />);

  const navbar = screen.queryByTestId('navigation-bar');
  await waitFor(() => expect(navbar).toBeInTheDocument());
  
  const dropdown = screen.queryByTestId('dropdown-menu');
  await waitFor(() => expect(dropdown).toBeInTheDocument());

  const chart = screen.queryByTestId('chart-container');
  await waitFor(() => expect(chart).toBeInTheDocument());
});
