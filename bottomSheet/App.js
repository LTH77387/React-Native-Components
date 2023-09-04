import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, BackHandler, TouchableOpacity } from 'react-native';
import { TextInput, Button, Surface } from 'react-native-paper';
import BottomSheet from 'react-native-simple-bottom-sheet';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { NativeRouter, Route, Switch } from "react-router-native";
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';
export default function App() {
  const [name, setName] = useState('');
  const [showBottomSheet,setShowBottomSheet] = useState(false);
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', function () {
  //     if(name !== "" && !showBottomSheet){
  //       setShowBottomSheet(true);
  //     }
  //     return true;
  //   });

  //   return () => backHandler.remove();
  // }, [name]);

  return (
    <View style={styles.container}>
       <NativeRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path=".test" component={TestScreen}></Route>
        </Switch>
        </NativeRouter> 

      {/* <TextInput
        mode="flat"
        style={{ width: '75%' }}
        label="Enter your name"
        onChangeText={(newName) => setName(newName)}
      />
      {showBottomSheet && (

      <BottomSheet isOpen>
  {(onScrollEndDrag) => (
    <ScrollView onScrollEndDrag={onScrollEndDrag}>

       <Text style={{ marginBottom:'10%', fontSize:18, fontWeight:'bold' }}>
        Are you sure to finish your post?
      </Text>
     <View style={{ alignItems:'flex-start' }}>
    
      <TouchableOpacity style={{width:"100%", height:50, marginBottom:'5%' }}>
          <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Ionicons name="trash" size={30} color="#000" />
              <Text style={{ fontSize:17, marginLeft:'6%' }}>Discard</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity style={{width:"100%", height:50,  marginBottom:'5%' }}>
        <View style={{ flexDirection:'row' }}>
          <AntDesign name="check" size={35} color="#1cb9ed" />
         <Text style={{ alignItems:'center', marginLeft:'5%', fontSize:17, color:"#1cb9ed" }}>Continue Editing</Text>
        </View>
      </TouchableOpacity>
     </View>
      
    </ScrollView>
  )}
</BottomSheet>

      )} */}
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
  },
 
});
