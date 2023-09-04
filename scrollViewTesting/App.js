import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Surface } from 'react-native-paper';

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.surfaceContainer}>
          <Surface style={[styles.surface, { padding: 10 }]}>
            <Text>BBQ</Text>
          </Surface>

          <Surface style={[styles.surface, { padding: 15 }]}>
            <Text>BBQ</Text>
          </Surface>

          <Surface style={[styles.surface, { padding: 15 }]}>
            <Text>BBQ</Text>
          </Surface>

          <Surface style={[styles.surface, { padding: 15 }]}>
            <Text>BBQ</Text>
          </Surface>

          <Surface style={[styles.surface, { padding: 15 }]}>
            <Text>BBQ</Text>
          </Surface>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop:'15%'
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  surfaceContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    width: '90%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
};

export default YourComponent;
