import React, { useState } from "react";
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 Image,
} from "react-native";
import {
 responsiveHeight,
 responsiveWidth,
 responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
 scale,
 verticalScale,
 moderateScale,
 moderateVerticalScale,
} from "react-native-size-matters";
const EditAddress = ({ home, address }) => {
  const [selectedOption, setSelectedOption] = useState(null);
 
  const handleRadioSelect = (option) => {
     setSelectedOption(option);
  };
 
  const RadioButton = ({ selected, onSelect }) => {
     return (
       <TouchableOpacity onPress={() => onSelect(selected)}>
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
         </View>
       </TouchableOpacity>
     );
  };
 
  return (
     <View style={styles.tabView}>
       <View style={{ flexDirection: "row" }}>
         <View style={{ width: responsiveWidth(7), justifyContent: "center" }}>
           <RadioButton
             selected={selectedOption === "first"}
             onSelect={() => handleRadioSelect("first")}
           />
         </View>
         <View
           style={{
             width: responsiveWidth(70),
             padding: moderateScale(5),
           }}
         >
           <Text style={styles.text1}>{home}</Text>
           <Text style={{ fontSize: responsiveFontSize(1.6) }}>{address}</Text>
         </View>
         <View style={{ justifyContent: "center" }}>
           <TouchableOpacity>
             <Image
               style={{ width: 25, height: 25 }}
               source={require("../assets/Edit.png")}
             />
           </TouchableOpacity>
         </View>
       </View>
     </View>
  );
 };
 

export default EditAddress;

const styles = StyleSheet.create({
 tabView: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: "center",
 },
 text1: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
 },
});