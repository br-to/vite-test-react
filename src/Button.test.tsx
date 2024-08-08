import { render, screen } from '@testing-library/react';
import Button from './Button';

test('render test', () => {
  render(<Button />);
  const buttonText = screen.getByText(/test/i);
  expect(buttonText).toBeVisible();
});
