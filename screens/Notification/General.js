import React from "react";
import { View, Text, Image } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";


const General = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FAFAFA",
      // justifyContent: "center",
       // alignItems: "center",
      }}

    >
    <View style={{justifyContent:'center',alignItems:'center',height:responsiveHeight(30),width:responsiveWidth(100),paddingTop:150}}>
    <Image source={require('../../assets/rafiki.png')}/>
    </View>
 <View style={{justifyContent:'center',alignItems:'center',paddingVertical:150}}>
<Text style={{fontSize:20,fontFamily:Regular,fontWeight:'700'}}>Empty</Text>
<Text style={{fontSize:17,fontFamily:Regular,fontWeight:'300',paddingVertical:7}}>You don’t have any notification at this time</Text>

</View> 
    

  
    </View>
  );
};

export default General;
