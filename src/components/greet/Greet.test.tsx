import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('greet', () => {
  test('test hello render', () => {
    render(<Greet />);
    const textElement = screen.getByText('hello guest');
    expect(textElement).toBeInTheDocument();
  });

  test('test hello br-to render', () => {
    render(<Greet name="br-to" />);
    const textElement = screen.getByText('hello br-to');
    expect(textElement).toBeInTheDocument();
  });
});
