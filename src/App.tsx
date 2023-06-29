import React from 'react';
import './App.css';
import { DemoFetch } from './DemoFetch';
import { DemoLS } from './DemoLS';
import { DemoHover } from './DemoHover';
import { DemoResize } from './DemoResize';
import { DemoScroll } from './DemoScroll';
import { DemoToggle } from './DemoToggle';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>useFetch demo</p>
        <DemoResize />
        <DemoToggle />
        <DemoHover />
        <DemoLS />
        <DemoScroll />
        <DemoFetch />
      </header>
    </div>
  );
}

export default App;
