// Google Maps component

// File: frontend/src/components/Map.js
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Default map center (example: Bangalore)
const center = {
  lat: 12.9716,
  lng: 77.5946,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
// This code defines a Google Maps component using React.