import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LockButton = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isLocked ? styles.locked : styles.unlocked]}
        onPress={() => setIsLocked(!isLocked)}
      >
        <Text style={styles.buttonText}>{isLocked ? "Locked" : "Unlocked"}</Text>
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
  locked: {
    backgroundColor: 'red',
  },
  unlocked: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LockButton;
