import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDebounce } from './hooks/useDebounce';
import { Demo } from './Demo';

function App() {
  const [val, setVal] = useState<string>('');

  useDebounce(() => {
    console.log('fetching data after debounce of', 2000, 'ms')
  }, 2000, [val]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo />
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        {/* <button onClick={() => setCount((p) => p + 1)}>increment</button> */}
      </header>
    </div>
  );
}

export default App;
