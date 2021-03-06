var url = "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson";

d3.json(url, (err, raw) => {
  var lon = raw.features.map(f => f.geometry.coordinates[0]);
  var lat = raw.features.map(f => f.geometry.coordinates[1]);
  var z = raw.features.map(f => f.properties.mag);

  var data = [
    { type: "scattermapbox", lon: lon, lat: lat, z: z, hoverinfo: "y" }
  ];

  var layout = {
    mapbox: { style: "dark", zoom: 2, center: { lon: -68, lat: -23 } },
    margin: { t: 0, b: 0 }
  };

  var config = {
    mapboxAccessToken: "your access token"
  };

  Plotly.newPlot('myDiv', data, layout, config);
});
