window.onload = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGVvMTEyMyIsImEiOiJja2lrc2N5Ym0wY3ZjMnFuYXBrMDdieHc1In0.f80tKFBT0dVw1wH3eCT9aw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10'
    });
    
    let data_points = []
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv')
    .then((data)=>{
        data.data.split('\n').forEach((line, index )=>{
            let this_line = line.split(',')
            if(index > 0) {
                data_points.push({
                    lat: this_line[1],
                    lon: this_line[2],
                    mag: this_line[4]
                })
            }
        })
        add_points(data_points, map)
    })
    .catch((error)=>{
        console.log("Ajax request failed: ", error)
    })
}

function add_points(data_points, map) {
    // add markers to map
  data_points.forEach(function(marker) {
  
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';
        el.style = `width:${marker.mag *10}px; height:${marker.mag*10}px;`
        el.title = `Magnitude of ${marker.mag}`
      
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat([marker.lon, marker.lat])
          .addTo(map);
  });
}