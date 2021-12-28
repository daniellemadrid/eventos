import React from "react";
import { useState } from 'react';


function Contador() {
    const [count, setCount] = useState(0);

    const contando = () => {
        setCount (count + 1);
    };
  
    return (
      <div>
        {count}<br />
        <button onClick={contando}>
          aumentando
        </button>
  
      <button onClick={contando}>
        diminuindo
      </button>
    </div>
    );
  }

  export default Contador;