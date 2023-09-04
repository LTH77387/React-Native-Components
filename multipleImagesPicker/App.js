import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [images, setImages] = useState([
    // "./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg",
    "./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg",
    // "./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg",
    "./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg",
    "./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg"
  ]);


 
  const pickImage = async () => {
    if (images.length >= 5) {
      // Display an alert if the maximum limit is reached
      Alert.alert('Maximum Limit Reached', 'You can select up to 5 images.');
      return;
    }
     
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.uri]);
    }
    console.log(images);
  };

  const renderImages = () => {
    if (images.length === 0) {
      return (
        <>
        <Image source={require('./assets/add-image.png')} style={{ width:150, height:150 }}/>
          <Text>Add photos</Text>
        </>
      );
    }

    const rows = [];
    let currentRow = [];
    let imageIndex = 0;
    let hasSingleImageRow = false;

    while (imageIndex < images.length) {
      currentRow.push(
        <Image
          key={imageIndex}
          source={{ uri: images[imageIndex] }}
          style={styles.image}
        />
      );

      imageIndex++;

      if (currentRow.length === 2 || imageIndex === images.length) {
        // Adjust the width and height styles based on the number of images in the row
        const rowStyle = currentRow.length === 1 ? styles.singleImageRow : styles.imageRow;

        // Check if the single image row is not added yet and this row has a single image
        if (!hasSingleImageRow && currentRow.length === 1) {
          rows.unshift(
            <View key={`singleRow-${imageIndex}`} style={[rowStyle, { marginBottom: 2 }]}>
              {currentRow}
            </View>
          );
          hasSingleImageRow = true;
        } else {
          rows.push(
            <View key={rows.length} style={[rowStyle, { marginBottom: 2 }]}>
              {currentRow}
            </View>
          );
        }

        currentRow = [];
      }
    }

    return <View>{rows}</View>;
  };


  return (
    <>
      <Surface
        style={{
          width: '90%',
          height: '32%',
          borderRadius: 10,
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}
      >
        <Text style={{ marginLeft: '5%', marginTop: '5%' }}>Start telling about the post.</Text>
      </Surface>

      <TouchableOpacity
        onPress={pickImage}
        style={{ width: '90%', alignContent: 'center', alignItems: 'center', alignSelf: 'center', height: '60%' }}
      >
        <Surface
          style={{
            height: '100%',
            marginTop: '5%',
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            
          }}
        >
          {/* {renderImages()} */}
         {
           images.length ==0 &&
           <>
            <Image source={require('./assets/add-image.png')} style={{ width:150, height:150 }}/>
            <Text>Add photos</Text>
           </>
         }
          {
            images.length ==1 &&
          <View>
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:300,height:300 }} />
          </View>
          }

          {
            images.length ==2 &&
           <View style={{ flexDirection:'row' }}>
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170, marginRight:'1%' }} />
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170 }} />
          </View>
          }

        {
          images.length ==3 &&
          <View style={{ flexDirection: 'row' }}>
          <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width: 200, height: 300, marginRight:'1%' }} />

          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width: 150, height: 150, marginBottom:'1%' }} />
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width: 150, height: 147 }} />
          </View>
        </View>
        }

       {
         images.length==4 &&
         <View>
          <View style={{ flexDirection:'row', marginBottom:'1%'}}>
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170, marginRight:'1%' }} />
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170 }} />
            </View>
            <View style={{ flexDirection:'row'}}>
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170, marginRight:'1%' }} />
            <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170 }} />
         </View>
       </View>
       }


        {
          images.length==5&&
          <View>
            <View style={{ flexDirection:'row', marginBottom:'1%'}}>
              <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170, marginRight:'1%' }} />
              <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:170,height:170 }} />
              </View>
              <View style={{ flexDirection:'row'}}>
              <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:110,height:120, marginRight:'1%' }} />
              <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:110,height:120,  marginRight:'1%' }} />
              <Image source={require('./assets/0-02-06-57dbf7dc485743a8bd973c29fb9de70942143296714f89bfcb8a516893cdb124_275a16ea42a.jpg')} style={{ width:117,height:120 }} />
            </View>
        </View>
        }

        
        </Surface>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
 
  image: {
    width: '100%',
    height: 150, // Set a fixed height for the images
    resizeMode: 'cover', // Ensure the image maintains its aspect ratio and covers the entire area
    margin:2
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  singleImageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignSelf:'center'
  },
});
