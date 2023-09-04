import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function TestScreen() {
 

  return (
    <View style={styles.container}>
     <Text>This is from test screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: '100%'
  },
});
