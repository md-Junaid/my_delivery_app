import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const MapPage = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker 
        draggable
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title="My Marker"
        description="This is a description"
      />
    </MapView>
  )
}

export default MapPage