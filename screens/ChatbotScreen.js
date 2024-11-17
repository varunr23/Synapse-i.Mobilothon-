import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChatbotScreen = () => {
  const handleChatbot = () => {
    alert("Chatbot functionality coming soon!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot</Text>
      <TouchableOpacity style={styles.button} onPress={handleChatbot}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ChatbotScreen;
