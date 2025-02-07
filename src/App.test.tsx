import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders hello react typescript', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello, react typescript!/i);
  expect(headingElement).toBeInTheDocument();
});
