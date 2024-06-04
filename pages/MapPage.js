import React from 'react';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

const CustomCallout = ({ marker }) => (
  <Callout>
    {/* <View style={styles.calloutContainer}>
      <Image source={require('../assets/promoG/65533_Andre_AdobeStock.jpeg')} style={{width:200, height:200}} resizeMode='contain' /> */}
      <View style={styles.calloutTextContainer}>
        <Text style={styles.calloutTitle}>{marker.title}</Text>
        <Text style={styles.calloutDescription}>{marker.description}</Text>
      </View>
    {/* </View> */}
  </Callout>
);

const MapPage = () => {
  const markers = [
    {
      coordinate: {
        latitude: 54.320820,
        longitude: 10.134630,
      },
      title: 'Kosmos',
      description: "Price: 14€/kg",
      imageUrl: 'https://www.lebensbaum.com/media/92/36/7a/1692606336/4561_Gourmet_Kaffee_1000g_RGB_948x1066.png'
    },
    {
      coordinate: {
        latitude: 54.340290,
        longitude: 10.134030,
      },
      title: 'das retro.',
      description: "Price: 16.25€/kg",
      imageUrl: 'https://m.media-amazon.com/images/I/51R3uy2ag0L._SX300_SY300_QL70_ML2_.jpg'
    },
    {
      coordinate: {
        latitude: 54.332210,
        longitude: 10.132060,
      },
      title: 'Peaberries',
      description: `<p>Description here </p>`,
      imageUrl: 'https://m.media-amazon.com/images/I/51R3uy2ag0L._SX300_SY300_QL70_ML2_.jpg'
    },
    {
      coordinate: {
        latitude: 54.32909581845872, 
        longitude: 10.13599531676602,
      },
      title: 'Cafe Brunswik Kiel',
      description: `<p>Description here </p>`,
      imageUrl: 'https://cdn.stoll-espresso.de/thumbnail/bc/2f/4e/1697544419/alps-coffee-espresso-bio-500g-bohnen_1920x1920.jpg'
    },
    {
      coordinate: {
        latitude: 54.32609405162311, 
        longitude: 10.123817387409982,
      },
      title: 'Loppokaffee Café',
      description: `<p>Description here </p>`,
      imageUrl: 'https://m.media-amazon.com/images/I/51R3uy2ag0L._SX300_SY300_QL70_ML2_.jpg'
    },
  ]
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 54.343130,
        longitude: 10.133650,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker 
          key={index}
          coordinate={marker.coordinate}
        >
          <CustomCallout marker={marker} />
        </Marker>
      ))}
    </MapView>
  )
}

export default MapPage;

const styles = StyleSheet.create({
  calloutContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  calloutImage: {
    width: 50,
    height: 50,
    marginRight: 8,
    resizeMode: "contain"
  },
  calloutTextContainer: {
    flex: 1,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: "center"
  },
  calloutDescription: {
    fontSize: 15,
  },
});