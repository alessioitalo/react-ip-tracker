import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function IpMap(props) {
  return (
    <MapContainer
      id="map"
      center={props.coordinates}
      zoom={10}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.coordinates} />
      <h1>{props.coordinates}</h1>
    </MapContainer>
  );
}

export default IpMap;
