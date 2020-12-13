window.onload = () => {
    loadMap()
}
function loadMap(data_points) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvMTEyMyIsImEiOiJja2lrc2N5Ym0wY3ZjMnFuYXBrMDdieHc1In0.f80tKFBT0dVw1wH3eCT9aw';
    var map = new mapboxgl.Map({
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

