import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatbotButton = () => {
  const handlePress = () => {
    alert("Chatbot functionality coming soon!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Ask Chatbot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChatbotButton;
