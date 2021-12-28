import React from "react";
import { useState } from 'react';


function Contador() {
    const [count, setCount] = useState(0);

    const aumentando = () => {
        setCount (count + 1);
    };

    const diminuindo = () => {
        setCount (count - 1);
    };

  
    return (
      <div>
        {count}<br />
        <button onClick={aumentando}>
          aumentando
        </button>
  
      <button onClick={diminuindo}>
        diminuindo
      </button>
    </div>
    );
  }

  export default Contador;