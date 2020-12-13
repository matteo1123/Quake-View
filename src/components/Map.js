import { Component } from 'react';
import './Map.css'
import renderHTML from 'react-render-html';




class Map extends Component{
    
  render(){
      let map = `
      <div id="map"></div>
      `
    return (
        renderHTML(map)
    );    
  }

}

export default Map;
