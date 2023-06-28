import React from 'react';
import './App.css';
import { DemoFetch } from './DemoFetch';
import { DemoLS } from './DemoLS';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>useFetch demo</p>
        <DemoFetch />
        <DemoLS />
      </header>
    </div>
  );
}

export default App;
