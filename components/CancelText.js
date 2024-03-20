//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";
const RadioButton = ({ label, selected, onSelect }) => {
  // alert(SP_KEY);
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: selected ? "#FFC44D" : "gray",
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

// create a component
const Canceltext = ({Cancel}) => {
    const [selectedOption, setSelectedOption] = useState("first");
    const handleRadioSelect = (option) => {
      setSelectedOption(option);
    };
    
    return (
        <View style={{marginTop:30,flexDirection:"row",borderWidth:1,paddingHorizontal:35,paddingVertical:15,width:responsiveWidth(85),left:20,borderRadius:10,borderColor:"#FFC44D"}}>
        <RadioButton 
              selected={selectedOption === "first"}
              onSelect={() => handleRadioSelect("first")}
            />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500"}}>{Cancel}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
});

//make this component available to the app
export default Canceltext;
