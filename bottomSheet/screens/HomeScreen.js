import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BottomSheetComponent from '../components/BottomSheetComponent';
import { Button } from 'react-native-paper';

export default function HomeScreen({history}) {
  const itemList = [
    { icon: <Ionicons name="trash" size={30} color="#000" />, label: 'Discard' },
    { icon: <AntDesign name="check" size={35} color="#1cb9ed" />, label: 'Continue Editing' },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <BottomSheetComponent
        isOpen={true}
        promptText="Are you sure to finish your post?"
        itemList={itemList}
      />
      <Button onPress={()=>{history.push("/test")}}>Go</Button>
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
