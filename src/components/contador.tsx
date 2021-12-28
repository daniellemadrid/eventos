import React from "react";
import { useState } from 'react';


function Contador() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        {count}<br />
        <button onClick={() => setCount(count + 1)}>
          aumentando
        </button>
  
      <button onClick={() => setCount(count - 1)}>
        diminuindo
      </button>
    </div>
    );
  }

  export default Contador;