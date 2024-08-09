import { useState } from 'react';

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return {
    count,
    increase,
    decrease,
  };
};
