import React from 'react';
import './App.css';
import CounterProps from './components/Counter';
import Clock from './components/Clock';
import Todos from './components/Todos';
import NameInput from './components/NameInput';

function App() {
  return (
    <div className="App">
        <NameInput />
      <CounterProps initialValue ={1} />
      <Clock />
      <h1>Todos:</h1>
      <Todos />
    </div>
  );
}

export default App;
