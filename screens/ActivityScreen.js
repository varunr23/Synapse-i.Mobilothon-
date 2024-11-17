import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';

const ActivityScreen = () => {
  const { activities } = useContext(ActivitiesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Log</Text>
      {activities.length > 0 ? (
        <FlatList
          data={activities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.logItem}>
              <Text style={styles.logTitle}>Engine Session</Text>
              <Text>Start Time: {item.startTime.toLocaleTimeString()}</Text>
              {item.endTime && (
                <>
                  <Text>End Time: {item.endTime.toLocaleTimeString()}</Text>
                  <Text>Total Time: {item.totalTime}</Text>
                  <Text>Distance Traveled: {item.distance} km</Text>
                </>
              )}
            </View>
          )}
        />
      ) : (
        <Text style={styles.noActivitiesText}>No activities recorded yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noActivitiesText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ActivityScreen;
