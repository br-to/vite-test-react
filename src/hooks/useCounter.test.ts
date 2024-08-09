import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('hooks test', () => {
  test('shold 0', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('intial props', () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });

  test('increment count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increase());
    expect(result.current.count).toBe(1);
  });

  test('decrement count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrease());
    expect(result.current.count).toBe(-1);
  });
});
