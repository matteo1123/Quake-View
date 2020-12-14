import './App.css';
import React, { useState } from 'react';
import QuakePeriod from './components/QuakePeriod';
import MagFilter from './components/MagFilter';
import Map from './components/Map';
import {useSelector} from 'react-redux';
import endpoint from './endpoint';
import axios from 'axios';



function App() {
  const [globe, setGlobe] = useState("false")
  console.log(typeof globe)
  const period = useSelector(state => state.period)
  const mag = useSelector(state => state.mag)
  
 axios.get(endpoint(period, mag))
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
  if(globe !== "true"){
      window.loadMap(data_points)
  }else {
    window.loadGlobe(data_points)
  }
      })
    .catch((er)=>console.log('ajax request failed',er))
    

  return (
    <div className="App">
    
    <select className="ui dropdown selection multiple" onChange={e=> setGlobe(e.target.value)}>
    <option value="false">Map</option>
    <option value="true">3D Globe</option>
    </select>
      <MagFilter/>
      <Map endpoint/>
      <QuakePeriod/>
    </div>
  );
}

export default App;
