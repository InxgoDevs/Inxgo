import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";

const Pending = ({ navigation }) => {
  const detailJob = async (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center',top:50}} >
      <View>
        <Image source={require('../../assets/calendar.png')}></Image>
      </View>
      <View style={{marginTop:50}}>
        <Text>You don’t have any scheduled hiring at this time</Text>
      </View>
      <View style={{marginTop:20}}>
      <Text style={{fontSize:32,color:"#FFC44D",fontWeight:"600"}}>Hire Now</Text>
      </View>
      
    </View>
  );
};

export default Pending;
