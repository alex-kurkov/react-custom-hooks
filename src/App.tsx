import React from 'react';
import './App.css';
import { DemoFetch } from './DemoFetch';
import { DemoLS } from './DemoLS';
import { DemoHover } from './DemoHover';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>useFetch demo</p>
        <DemoHover />
        <DemoLS />
        <DemoFetch />
      </header>
    </div>
  );
}

export default App;
