import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const Counter = () => {
  const { count, increase } = useCounter(100);
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increase}>
        Increment
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      {/* <button type="button" onClick={() => setCount(num)}>
        set
      </button> */}
    </div>
  );
};

export default Counter;
