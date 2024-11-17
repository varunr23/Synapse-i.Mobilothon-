import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EfficiencyScore = () => {
  const [score, setScore] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => (prev > 0 ? prev - 1 : 100));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Efficiency Score: {score}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EfficiencyScore;
