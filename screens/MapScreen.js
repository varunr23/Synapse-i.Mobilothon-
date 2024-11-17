import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBZ2QGaYodTEtI42nz_WpdAkjBnOyJpCbo'; // Replace with your Google Maps API key

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [destination, setDestination] = useState('');
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied.');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const searchDestination = async () => {
    if (!destination) {
      alert('Please enter a destination.');
      return;
    }

    try {
      const destinationData = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=${GOOGLE_MAPS_API_KEY}`
      );

      const destinationCoords = destinationData.data.results[0].geometry.location;

      const directionsData = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destinationCoords.lat},${destinationCoords.lng}&key=${GOOGLE_MAPS_API_KEY}`
      );

      const routePoints = decodePolyline(
        directionsData.data.routes[0].overview_polyline.points
      );

      setRouteCoordinates(routePoints);
    } catch (error) {
      alert('Failed to fetch route. Please try again.');
    }
  };

  const decodePolyline = (t) => {
    let points = [];
    let index = 0,
      len = t.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b, shift = 0,
        result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = t.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }

    return points;
  };

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Your Location"
              description="You are here"
            />
            {routeCoordinates.length > 0 && (
              <>
                <Marker
                  coordinate={routeCoordinates[routeCoordinates.length - 1]}
                  title="Destination"
                />
                <Polyline
                  coordinates={routeCoordinates}
                  strokeWidth={4}
                  strokeColor="blue"
                />
              </>
            )}
          </MapView>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter destination"
              value={destination}
              onChangeText={(text) => setDestination(text)}
            />
            <Button title="Search" onPress={searchDestination} />
          </View>
        </>
      ) : (
        <Text style={styles.errorText}>
          {errorMsg || 'Loading your location...'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  errorText: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    color: 'red',
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default MapScreen;

