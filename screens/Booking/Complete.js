///kkkkk
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";
import { NavigationContainer } from "@react-navigation/native";
import { Bold } from "../../constants/fonts";
import Frame from "../../assets/Frame.png";
import { Regular } from "../../constants/fonts";

const Complete = ({ navigation }) => {
   const detailJob = async (path) => {
   console.log(path);
  //   // navigation.navigate('Detail');
    navigation.navigate(path);
   };

  return (
    <View
      style={{
        marginTop: "10%",
        elevation: 10,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
        <Image style={wallet.image} source={Frame} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18,fontFamily:Regular }}>Mark Tuan</Text>
          </View>
          <Text style={{ fontSize: 12,fontFamily:Regular }}>Plumber</Text>
        </View>
        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 80,
                height: 30,
                backgroundColor: "#FFC44D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11,fontFamily:Bold }}>Completed</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() =>detailJob("CompleteDetails")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{ marginTop: 10, width: 15, height: 15 }}
                source={rightarrow}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginBottom: 10,
          width: "90%",
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "38%", marginLeft: 5, flexDirection: "row" }}>
          <Image source={location} />
          <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 2 ,fontFamily:Regular}}>
            Sadiq Centre LHR
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            left: 10,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={{ width: 15, height: 15 }} source={hrs} />
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
              marginLeft: 2,
              fontFamily:Regular
            }}
          >
            4 hrs
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            right: 5,
            flexDirection: "row",
          }}
        >
          <Image style={{ width: 15, height: 15 }} source={circle} />
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
              marginLeft: 2,
              fontFamily:Regular
            }}
          >
            $40/ hr
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Complete;
