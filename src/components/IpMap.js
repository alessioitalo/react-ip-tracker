import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function IpMap({ coordinates }) {

  const ChangeCenter = () => {
    const map = useMap();
    console.log(coordinates);
    const [a, b] = coordinates;
    if (a) {
      map.setView([a, b]);
    } else {
      map.setView([0, 0]);
     }
    return null;
  };
  return (
    <MapContainer id="map" center={[0, 0]} zoom={10} zoomControl={false}>
      <ChangeCenter />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0,0]} />
    </MapContainer>
  );
}

export default IpMap;
