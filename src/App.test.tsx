import { render, screen } from '@testing-library/react';
import App from './App';

test('render test', () => {
  render(<App />);
  const h1Text = screen.getByText(/Vite React/i);
  expect(h1Text).toBeVisible();
});
