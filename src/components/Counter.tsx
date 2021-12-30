import React from "react";
import { useState } from 'react';


interface CounterProps {
  initialValue : number;
}

function Counter( props : CounterProps) {
  const [count, setCount] = useState(props.initialValue);

  const incrementing = () => {
    setCount(count + 1);
  };

  const decreasing = () => {
    setCount(count - 1);
  };


  return (
    <div>
      {count}<br />
      <button onClick={incrementing}>aumentando</button>

      <button onClick={decreasing}>diminuindo</button>
    </div>
  );
}

export default Counter;