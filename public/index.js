window.onload = () => {
    
}
function loadMap(data_points) {
    let map = document.querySelector('#map')
    let parent =document.querySelector('#map').parentNode
    parent.removeChild(map)
    let new_map = document.createElement('div')
    new_map.id="map";
    parent.appendChild(new_map)
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvMTEyMyIsImEiOiJja2lrc2N5Ym0wY3ZjMnFuYXBrMDdieHc1In0.f80tKFBT0dVw1wH3eCT9aw';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10'
    });
        addPoints(data_points, map)
}

function addPoints(data_points, map) {
    // add markers to map
  data_points.forEach(function(marker) {
  
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
        el.style = `width:${marker.mag *10}px; height:${marker.mag*10}px;`
        el.title = `Magnitude of ${marker.mag} \n ${marker.place} \n ${moment(marker.time).format('lll')}`
      try{
        // make a marker for each feature and add to the map
        if(marker.lon) {
            new mapboxgl.Marker(el)
          .setLngLat([marker.lon, marker.lat])
          .addTo(map);            
        }
      }
      catch(error){
          console.log(marker.lon, marker.lat)
          console.log(error)
      }

  });
}

function loadGlobe(data_points) {
    
    let map = document.querySelector('#map')
    let parent =document.querySelector('#map').parentNode
    parent.removeChild(map)
    let new_map = document.createElement('div')
    new_map.id="map";
    parent.appendChild(new_map)
    
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NGY5YjRhMC1lNjMwLTQ4YmUtOWE4OS02OGY4NzM0YWEwZTkiLCJpZCI6MzkyNjQsImlhdCI6MTYwNzQwMDQ4MX0.g_cgW3ISTTxMX6LJvrIal6l39IlAlMLzrmpTpzI5wZM';
       
    const viewer = new Cesium.Viewer('map', {
      terrainProvider: Cesium.createWorldTerrain()
    });
    
    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(-122.384, 37.62, 4000)
    // });
    
    data_points.forEach((point)=>{
        let dataPoint = { longitude: point.lon, latitude: point.lat, height: 0 };
        viewer.entities.add({
          description: `Magnitude of ${point.mag} `,
          position: Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
          point: { pixelSize: 5, color: Cesium.Color.RED }
        });    
    })

}