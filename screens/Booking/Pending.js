import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";
import { Regular } from "../../constants/fonts";

const Pending = ({ navigation }) => {
  const detailJob = async (path) => {
    navigation.navigate(path);
  };

  return (
    <View
      style={{
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        top: 50,
      }}
    >
      <View>
        <Image source={require("../../assets/calendar.png")}></Image>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={{fontFamily:Regular}}>You don’t have any scheduled hiring at this time</Text>
      </View>
      <View style={{ marginTop: 20 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('ViewAll')}> 
      <Text style={{ fontSize: 32, color: "#FFC44D", fontWeight: "600" ,fontFamily:Regular}}>
          Hire Now
        </Text>
      </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Pending;
