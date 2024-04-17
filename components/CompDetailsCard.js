import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import wallet from "../style/wallet";

import { CommonImages } from "../constants/Images";
import { Regular } from "../constants/fonts";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const CompDetailsCard = () => {
  return (
    <View
      style={{
        marginRight: "2%",
        marginLeft: "2%",
        // backgroundColor: "red",
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
        <Image style={wallet.image} source={CommonImages.plumber} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 18, fontFamily: Regular, fontWeight: 500 }}
            >
              Mark Tuan
            </Text>
          </View>
        </View>
        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 75,
                height: 22,
                backgroundColor: "#FFC44D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Text
                style={{ fontSize: 10, fontFamily: Regular, fontWeight: 500 }}
              >
                Completed
              </Text>
            </View>
          </View>
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
          // backgroundColor: "gray",
          marginTop: responsiveHeight(4),
        }}
      >
        <View
          style={{
            width: "38%",
            marginLeft: 5,
            flexDirection: "row",
            // backgroundColor: "black",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={CommonImages.location}
          />
          <Text
            style={{
              fontSize: 12,
              fontFamily: Regular,
              fontWeight: 500,
              marginLeft: 2,
            }}
          >
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
          <Image
            style={{ width: 15, height: 15 }}
            source={CommonImages.timer}
          />
          <Text
            style={{
              fontSize: 13,
              fontFamily: Regular,
              fontWeight: 500,
              marginLeft: 2,
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
          <Image style={{ width: 15, height: 15 }} source={CommonImages.hrs} />
          <Text
            style={{
              fontSize: 13,
              fontFamily: Regular,
              fontWeight: 500,
              marginLeft: 2,
            }}
          >
            $40/ hr
          </Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "green",
          width: responsiveWidth(85),
          height: responsiveHeight(20),
          marginTop: responsiveHeight(2),
          paddingLeft: "5%",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500", fontFamily: Regular }}>
          Job Title
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "300", fontFamily: Regular }}>
          Plumber
        </Text>
        <View
          style={{
            // backgroundColor: "gray",
            marginTop: responsiveHeight(2),
          }}
        >
          <Text
            style={{ fontSize: 14, fontWeight: "500", fontFamily: Regular }}
          >
            Description
          </Text>
          <Text
            style={{ fontSize: 10, fontWeight: "300", fontFamily: Regular }}
          >
            We have assigned you a plumbing task for an urgent repair at Sadiq
            Centre, Lahore. Please make arrangements to visit the location as
            soon as possible and address the issue accordingly. Your expertise
            and prompt response are greatly appreciated.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CompDetailsCard;

const styles = StyleSheet.create({});