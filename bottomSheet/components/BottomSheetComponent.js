import React from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';


const BottomSheetComponent = ({ isOpen, promptText, itemList }) => {
  return (
    <BottomSheet isOpen={isOpen}>
      {(onScrollEndDrag) => (
        <ScrollView onScrollEndDrag={onScrollEndDrag}>
          <Text style={{ marginBottom: '10%', fontSize: 18 }}>
            {promptText}
          </Text>
          <View style={{ alignItems: 'flex-start' }}>
            {itemList.map((item, index) => (
              <TouchableOpacity key={index} style={{ width: "100%", height: 50, marginBottom: '5%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {item.icon}
                  <Text style={{ fontSize: 17, marginLeft: '6%' }}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </BottomSheet>
  );
};

export default BottomSheetComponent;
