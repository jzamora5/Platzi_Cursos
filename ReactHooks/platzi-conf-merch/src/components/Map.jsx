import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.latitude,
    lng: data.longitude,
  };

  return (
    <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
