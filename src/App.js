import './App.css';
import React from 'react';
import QuakePeriod from './components/QuakePeriod';
import MagFilter from './components/MagFilter';
import Map from './components/Map';
import {useSelector} from 'react-redux';
import endpoint from './endpoint';
import axios from 'axios';


function App() {
  const period = useSelector(state => state.period)
  const mag = useSelector(state => state.mag)
  console.log(period,mag)
  
  let data = axios.get(endpoint(period, mag))
    .then((data)=>{
    let data_points = []
      data.data.split('\n').forEach((line, index )=> {
      let this_line = line.split(',')
      if(index > 0) {
          data_points.push({
              lat: this_line[1],
              lon: this_line[2],
              mag: this_line[4],
              place: this_line[13],
              time: this_line[0]
          })
      }
  })
    window.loadMap(data_points)
    })
    .catch((er)=>console.log('ajax request failed',er))
    

  return (
    <div className="App">
      <MagFilter/>
      <Map endpoint/>
      <QuakePeriod/>
    </div>
  );
}

export default App;
