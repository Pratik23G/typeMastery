import { useState } from "react";

export const CounterButton = () => {
  const [count, setCount] = useState(0);
  function numberCount() {
    setCount(count + 1);
  }

  return <button onClick={numberCount}>Clicked {count} times</button>;
};
