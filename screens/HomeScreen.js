import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { ActivitiesContext } from '../context/ActivitiesContext';

const HomeScreen = () => {
  const [lockStatus, setLockStatus] = useState(false);
  const [location, setLocation] = useState(null);
  const { startEngine, stopEngine } = useContext(ActivitiesContext);

  // Fetch the user's location
  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }
    })();
  }, []);

  // Handle lock toggle
  const toggleLock = () => {
    setLockStatus(!lockStatus);
  };

  return (
    <View style={styles.container}>
      {/* Quick Actions Section */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton} onPress={startEngine}>
            <Text style={styles.buttonText}>Start Engine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={stopEngine}>
            <Text style={styles.buttonText}>Stop Engine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, lockStatus && styles.activeButton]}
            onPress={toggleLock}
          >
            <Text style={styles.buttonText}>
              {lockStatus ? 'Unlock Car' : 'Lock Car'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Traffic Near You Section */}
      <View style={styles.mapSection}>
        <Text style={styles.sectionTitle}>Traffic Near You</Text>
        {location ? (
          <MapView
            style={styles.mapPreview}
            initialRegion={location}
            showsTraffic
          >
            <Marker coordinate={location} title="You Are Here" />
          </MapView>
        ) : (
          <Text>Loading map...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  quickActions: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  mapSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  mapPreview: {
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
