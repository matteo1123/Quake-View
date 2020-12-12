import './App.css';
import React from 'react';
import QuakePeriod from './components/QuakePeriod';
import MagFilter from './components/MagFilter';
import Map from './components/Map';


function App() {
  return (
    <div className="App">
      <MagFilter/>
      <Map/>
      <QuakePeriod/>
    </div>
  );
}

export default App;
