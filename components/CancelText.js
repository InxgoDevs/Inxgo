import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const RadioButton = ({ label, selected, onSelect }) => {
 const borderColor = selected ? "#FFC44D" : "#E6E6E6";
 return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: borderColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selected && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#FFC44D",
              }}
            />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
 );
};

const Canceltext = ({ Cancel, selected, onSelect }) => {
 // Define borderColor based on the selected state
 const borderColor = selected ? "#FFC44D" : "#E6E6E6";

 return (
    <View style={{ marginTop: 25, flexDirection: "row", borderWidth:1, paddingHorizontal: 35, paddingVertical: 15, width: responsiveWidth(85), left: 20, borderRadius: 10, borderColor: borderColor, height: responsiveHeight(7), alignItems: "center" }}>
      <RadioButton
        selected={selected}
        onSelect={onSelect}
      />
      <Text style={{ marginLeft: 15, fontSize: 15, fontWeight: "500" }}>{Cancel}</Text>
    </View>
 );
};

export default Canceltext;
