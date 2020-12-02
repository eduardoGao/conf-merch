import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 19.4267261, lng: -99.1718796
  }

  return (
    <div>
      <LoadScript googleMapsApiKey='AIzaSyDbrSA9D3xFoSQ-99RXcfGMlzeUZkwH6Vs'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
