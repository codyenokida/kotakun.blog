"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type Props = {
  lat: number;
  lon: number;
};

const iconPerson = new L.Icon({
  iconUrl: "/marker.svg",
  iconRetinaUrl: "/marker.svg",
  iconSize: new L.Point(40, 40),
  className: "leaflet-div-icon",
  iconAnchor: new L.Point(20, 40),
  popupAnchor: new L.Point(0, -40),
});

export default function NowMap({ lat, lon }: Props) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      scrollWheelZoom={true}
      zoomControl={false}
      className="w-full h-[400px] rounded-md border-green-faded border-2"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={[lat, lon]} icon={iconPerson}></Marker>
    </MapContainer>
  );
}
