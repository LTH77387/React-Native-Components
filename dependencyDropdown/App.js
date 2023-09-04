import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons';

  const countries = [
    { label: 'Myanmar', value: 'Myanmar' },
    { label: 'United State', value: 'US' },
    { label: 'United Arab Emirates', value: 'UAE' },
  ];
  var cities = [];

  const App = () => {
    const [country,setCountry] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [city,setCity] = useState("");
    const [disabledSubmitButton,setDisabledSubmitButton] = useState(true);
    const [showSelectionText,setShowSelectionText] = useState(false);

    // handle and test country names
    const handleCountry = (item) => {
      setCountry(item.value);
      
            if(item.value == "Myanmar"){
              cities=[
                {label:"Yangon", value: "Yangon"},
                {label:"Mandalay", value: "Mandalay"},
                {label:"Naypyitaw",value: "Naypyitaw"}
              ]
            }else if(item.value=="US"){
              cities=[
                {label:"New York", value: "New York"},
                {label:"San Francisco", value: "San Francisco"},
                {label:"Washington, D.C.", value: "Washington, D.C."}
              ];
            }else if(item.value == "UAE"){
              cities=[
                {label:"Dubai",value:"Dubai"},
                {label:"Abu Dhabi", value:"Abu Dhabi"},
                {label:"Sharjah", value:"Sharjah"}
              ];
            }  
            setIsFocus(false);
            city !== ""  ? setDisabledSubmitButton(false) : setDisabledSubmitButton(true);
    }

    const handleCity = (item) => {
      setCity(item.value)
      country !== null ? setDisabledSubmitButton(false) : setDisabledSubmitButton(true);
    }

    // submit btn 
    const btnSubmit = () => {
       setShowSelectionText(true);
    }

    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countries}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Country' : '...'}
          searchPlaceholder="Search..."
          value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item)=>{handleCountry(item)}}
          renderLeftIcon={() => (
            <FontAwesome name="location-arrow" size={24} color="black" style={{ marginRight:'5%' }} />
          )}
        />

          <Dropdown
          // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          style={[styles.dropdown,{marginTop:"10%",marginBottom:'10%'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cities}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          // placeholder={!isFocus ? 'Select Product' : '...'}
          placeholder='Select City'
          searchPlaceholder="Search..."
          value={city}
          // onFocus={() => setIsFocus(true)}
          // onBlur={() => setIsFocus(false)}
          onChange={(item)=>{handleCity(item)}}
          renderLeftIcon={() => (
            <FontAwesome name="location-arrow" size={24} color="black" style={{ marginRight:'5%' }} />
          )}
        />
        <Button title='Submit' disabled={disabledSubmitButton} onPress={()=>{btnSubmit()}} />
        <View style={{ marginTop:'10%' }}>
           {showSelectionText&&
            (
              <>
                <Text style={{ marginBottom:'5%' }}>Selected Country: {country}</Text>
                <Text>Selected City: {city}</Text>
              </>
            )
           }
        </View>
      </View>
    );
  };

  export default App;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      justifyContent:'center',
      flex:1
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });