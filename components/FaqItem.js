// FaqItem.js
import React,{useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Regular } from "../constants/fonts";
import { responsiveHeight,responsiveWidth} from "react-native-responsive-dimensions";
responsiveHeight
const FaqItem = ({ title, text, isExpanded, onPress }) => {
 const [plusImage, setPlusImage] = useState(require("../assets/Plus.png"));
 const [colour, setColour] = useState('#FFF7E7');

 useEffect(() => {
    setPlusImage(isExpanded ? require("../assets/Minus.png") : require("../assets/Plus.png"));
    setColour(isExpanded ? "#FFC44D" : "#FFF7E7");
 }, [isExpanded]);

 return (
    <View style={styles.container}>
     <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: responsiveHeight(8),
          backgroundColor: colour,
          borderRadius: 8,
          alignItems: "center",
          width: responsiveWidth(90),
          marginLeft: 20,
          paddingHorizontal: 10,
        }}
      >
             

        <Text style={{ fontSize: 14, fontFamily: Regular }}>{title}</Text>
          <Image source={plusImage} />
        
      </View>
</TouchableOpacity>
      {isExpanded && (
        <View style={{ width: responsiveWidth(90), marginLeft: 20, marginTop: 10, paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 13, fontFamily: Regular, textAlign: 'justify' }}>
            {text}
          </Text>
        </View>
      )}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
 },
});

export default FaqItem;
