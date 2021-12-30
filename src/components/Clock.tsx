import React, { useEffect, useState } from "react";


function Clock() {
    const [time, setTime] = useState(new Date()); // new date = objeto js que mostra o tempo 


    useEffect(() => {
        function tick() {
            setTime(new Date());
        }
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    });

  //  O setInterval() é uma função temporizadora.
  // Ela executa uma função de retorno após determinado tempo

    return (
        <div>
            <h1>Hora:</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;