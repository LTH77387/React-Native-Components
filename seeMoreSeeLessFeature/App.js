import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderText = () => {
    const fullText = `Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      Open up App.js to start working on your app!
      Open up App.js to start working on your app!`;
  
    const maxLength = 49;
  
    if (expanded) {
      return (
        <>
          <Text>{fullText}</Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.button}>See Less</Text>
          </TouchableOpacity>
        </>
      );
    } else if (fullText.length <= maxLength) {
      return (
        <Text style={styles.text}>{fullText}</Text>
      );
    } else {
      const truncatedText = fullText.substring(0, maxLength);
    
      return (
        <>
          <Text style={styles.text}>{truncatedText}</Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.button}>See More</Text>
          </TouchableOpacity>
        </>
      );
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      {renderText()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight:'bold'
  },
  button: {
    color: 'blue',
  },
});
