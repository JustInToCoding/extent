import React, { useState } from "react";
import "./App.css";
import { Map, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import shp from "shpjs";
import concaveman from "concaveman";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;

function App() {
  const [points, setPoints] = useState();
  const [polygon, setPolygon] = useState();

  const pointToLayer = (feature, latLng) => {
    return L.circleMarker(latLng, {
      radius: 2,
      fillColor: "#ff7800",
      color: "#ff0000"
    });
  };

  const handleFile = file2 => {
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        const geoJson = shp.parseShp(reader.result);
        setPoints(geoJson);
        const points = geoJson.map(item => item.coordinates);
        const polygon = concaveman(points);
        const geoJsonPolygon = {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [polygon]
          }
        };
        setPolygon(geoJsonPolygon);
      },
      false
    );
    if (file2.target.files) {
      reader.readAsArrayBuffer(file2.target.files[0]);
    }
  };

  let position = [51.84276079, 5.18380148];
  if (polygon) {
    const [first, second] = polygon.geometry.coordinates[0][0];
    position = [second, first];
  }

  return (
    <div className="map">
      <Map center={position} zoom={15} className="leaflet-map">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          {polygon && (
            <Overlay checked name="Polygon">
              <GeoJSON data={polygon} />
            </Overlay>
          )}
          {points && (
            <Overlay name="Points">
              <GeoJSON data={points} pointToLayer={pointToLayer} />
            </Overlay>
          )}
        </LayersControl>
      </Map>
      <input type="file" id="input" onChange={handleFile}></input>
    </div>
  );
}

export default App;
