import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('contact', () => {
  test('render correctly', () => {
    render(<Contact />);

    const h1Text = screen.getByRole('heading', {
      name: 'お問い合わせ',
    });
    expect(h1Text).toBeInTheDocument();

    const inputValue = screen.getByDisplayValue('test br-to');
    expect(inputValue).toBeInTheDocument();

    const paragraphText = screen.getByText('全て入力してください');
    expect(paragraphText).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'お名前',
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('お名前');
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('フルネーム');
    expect(nameElement3).toBeInTheDocument();

    const emailElement = screen.getByRole('textbox', {
      name: 'E mail',
    });
    expect(emailElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
