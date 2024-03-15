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
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
//import { Jobstart } from "..";

const Jobstart = ({ navigation }) => {
  const detailJob = async (path) => {
    console.log(path);
    // navigation.navigate('Detail');
    navigation.navigate(path);
  };

  return (
    <View
      style={{
        marginTop: "20%",
        elevation:0,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
        <Image style={wallet.image} source={image_upload} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Mark Tuan</Text>
          </View>
          <Text style={{ fontSize: 12 }}>Plumber</Text>
        </View>
        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 60,
                height: 25,
                backgroundColor: "#FFE24D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Active</Text>
            </View>
          </View>
          {/* <TouchableOpacity onPress={() => detailJob("Detail")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{ marginTop: 10, width: 15, height: 15 }}
                source={rightarrow}
              />
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
      <View
        style={{
          marginTop:50,
          width: "90%",
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "38%", marginLeft: 5, flexDirection: "row" }}>
          <Image source={location} />
          <Text style={{ fontSize: 12, fontWeight: "600", marginLeft:5 }}>
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
              fontSize: 12,
              textAlign: "center",
              fontWeight: "600",
              marginLeft: 5,
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
              fontSize: 12,
              textAlign: "center",
              fontWeight: "600",
              marginLeft: 5,
            }}
          >
            $40/ hr
          </Text>
        </View>
      </View>
      <View style={{marginTop:40,width:responsiveWidth(80),marginLeft:20}}>
      <Text style={{fontSize:10}}>We have assigned you a plumbing task for an urgent repair at Sadiq Centre, Lahore. Please make arrangements to visit the location as soon as possible and address the issue accordingly. Your expertise and prompt response are greatly appreciated.</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../assets/Ring.png')}></Image>
      </View>
<View>
  {/* <CustomButton title="Submit" color="black" onPress={navigation.navigate.Jobstart}/>
  <CustomButton title="cancel" color="yellow" onPress={navigation.navigate.detail}/> */}

</View>
    </View>
  );
};

export default Jobstart;
