import './App.css';
import React from 'react';
import QuakePeriod from './components/QuakePeriod';
import MagFilter from './components/MagFilter';

function App() {
  return (
    <div className="App">
      <MagFilter/>
      <QuakePeriod/>
    </div>
  );
}

export default App;
