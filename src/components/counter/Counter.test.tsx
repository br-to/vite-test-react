import { screen, render } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

describe('counter', () => {
  test('render heading', () => {
    render(<Counter />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('render count button', () => {
    render(<Counter />);
    const countButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(countButton).toBeInTheDocument();
  });

  test('redners a count of 0', () => {
    render(<Counter />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('0');
  });

  test('render count button click 1', async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const countButton = screen.getByRole('button', {
      name: 'Increment',
    });

    await user.click(countButton);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('1');
  });

  test('render count type 10 -> 5', async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const numInput = screen.getByRole('spinbutton');
    await user.type(numInput, '5');
    expect(numInput).toHaveValue(5);

    // const setButton = screen.getByRole('button', {
    //   name: 'set',
    // });
    // await user.click(setButton);
    // const headingElement = screen.getByRole('heading');
    // expect(headingElement).toHaveTextContent('5');
  });

  test('focus', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const numInput = screen.getByRole('spinbutton');
    // const setButton = screen.getByRole('button', {
    //   name: 'set',
    // });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(numInput).toHaveFocus();

    // await user.tab();
    // expect(setButton).toHaveFocus();
  });
});
