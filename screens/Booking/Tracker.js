///kkkkk
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";
import circle from "../../assets/icons/circle.png";
import location from "../../assets/icons/location.png";
import hrs from "../../assets/icons/hrs.png";
import CircularProgress from 'react-native-circular-progress-indicator';

import { NavigationContainer } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
import Start from "../Login/Start";

const Tracker = ({ navigation }) => {
    
  const detailJob = async (path) => {
    console.log(path);
    // navigation.navigate('Detail');
    navigation.navigate(path);
  };

  return (
    <View
      style={{
        marginTop: "10%",
      //elevation: 10,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
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
                width: 50,
                height: 20,
                backgroundColor: "#FFE24D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10 }}>Active</Text>
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
          marginBottom: 20,
          marginTop:35,
          width:responsiveWidth(80),
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "38%", marginLeft: 5, flexDirection: "row" }}>
          <Image source={location} />
          <Text style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>
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
              fontWeight: "400",
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
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            $40/ hr
          </Text>
        </View>
        
      </View>
      <View style={{ width:responsiveWidth(80), marginLeft: '6%', flexDirection: 'row', borderWidth: 1.5, borderRadius: 10, borderColor: '#E8ECF1',marginTop:20 }}>
              <Text style={{ paddingLeft: 10, paddingRight: 10, fontSize: 10, marginTop: 10, marginBottom: 10,fontWeight:"400" }}>
                We have assigned you a plumbing task for an urgent repair at Sadiq Centre, Lahore. Please make arrangements to visit the location as soon as possible and address the issue accordingly. Your expertise and prompt response are greatly appreciated.
              </Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:30,}}>
            <CircularProgress
  value={0}
  radius={65}
  

  maxValue={10}
  initialValue={10}
  progressValueColor={'#fff'}
  activeStrokeColor={"#FFC44D"}
  inActiveStrokeColor={"#E8ECF1"}
  //valueSuffix="%"
  activeStrokeWidth={3}
  inActiveStrokeWidth={3}
  //title={"60"}
  //titleColor={"black"}  
  clockwise={false}
  duration={10000}
  onAnimationComplete={() => alert('time out')}


/>

            </View>
            
    </View>
  );
};

export default Tracker;
