import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useState, useEffect} from 'react';
import { Button } from 'react-native-paper';
export default function App() {
  const [image, setImage] = useState(null);
  const [fileName,setFileName] = useState("");

 // choose file
 const selectFile = async() => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
   mediaTypes: ImagePicker.MediaTypeOptions.All,
   allowsEditing: true,
   aspect: [4, 3],
   quality: 1,
 });
 var filename = result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length);
 setFileName(filename);
 if (!result.canceled) {
   setImage(result.assets[0].uri);
 }
 }
 
 const callFileName = () => {
  const originalFileName = fileName;

  // Extract the file name without the extension using regex
  const fileNameWithoutExtension = originalFileName.replace(/\.[^/.]+$/, '');
  
  // Define the new extension
  const newExtension = '.png';
  
  // Create the modified file name with the new extension
  const modifiedFileName = fileNameWithoutExtension + newExtension;
  
  console.log(modifiedFileName); // Output: "e6694599-5bff-4bfe-a17d-5805ab17f03b.png"
 }
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={{ width: "70%", height: "20%", marginBottom:'10%' }} />}
     <View style={{ flexDirection:'row' }}>
     <Button mode="contained" onPress={()=>{selectFile()}} style={{ marginRight:'5%' }}>Choose file</Button>
     <Button mode='contained-tonal'>Submit</Button>     
     </View>
     <Button mode='elevated' onPress={()=>{callFileName()}}>Get file name</Button>
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
