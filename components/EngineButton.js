import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EngineButton = () => {
  const [isEngineOn, setIsEngineOn] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isEngineOn ? styles.on : styles.off]}
        onPress={() => setIsEngineOn(!isEngineOn)}
      >
        <Text style={styles.buttonText}>
          {isEngineOn ? "Engine Running" : "Engine Stopped"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  on: {
    backgroundColor: 'blue',
  },
  off: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EngineButton;
