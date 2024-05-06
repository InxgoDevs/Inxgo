import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import appStyle from "../../style/footer";
import profile from "../../style/profile";
import Footer from "../Footer/Index";
import { SvgUri, SvgXml } from "react-native-svg";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomModal from "../../components/CustomModal";

import wallet from "../../style/wallet";
import MyMaps from "../../components/MyMaps";
import Jobstart from "./Jobstart";
const image_upload = require("../../assets/image_upload.png");
const arrow_back = require("../../assets/arrow_back.png");
const rightarrow = require("../../assets/rightarrow.png");
const circle = require("../../assets/icons/circle.png");
const location = require("../../assets/icons/location.png");
const hrs = require("../../assets/icons/hrs.png");
const map = require("../../assets/icons/map.png");

const Detail = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [showFullText, setShowFullText] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTrackClientButton = () => {
    setModalVisible(!modalVisible);
  };
  const handleTrackClient = () => {
    const destinationLat = 31.530194602322787;
    const destinationLng = 74.35702854395637;

    // Construct the URL for opening Google Maps with the destination
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;

    // Open the URL in the Google Maps app
    Linking.openURL(url);
    setModalVisible(!modalVisible);
  };
  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <CustomModal
        title="This will navigate to Google Maps App. Please confirm by selecting 'Yes' or 'No' below"
        buttontitle="Yes"
        buttontitle2="No"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPressNO={() => setModalVisible(false)}
        onPressYes={handleTrackClient}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Booking")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>My Jobs</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginRight: "2%",
          marginLeft: "2%",
          height: responsiveHeight(85),
          // backgroundColor: "black",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 5,
            height: responsiveHeight(8),
            //backgroundColor: "red",
          }}
        >
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
                  width: 80,
                  height: 30,
                  backgroundColor: "#FFC44D",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>Active</Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={wallet.line} /> */}
        <View
          style={{
            // marginTop: 10,
            // marginBottom: 10,
            width: "90%",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            height: responsiveHeight(8),
            //backgroundColor: "red",
          }}
        >
          <View
            style={{
              width: "38%",
              marginLeft: 5,
              flexDirection: "row",
            }}
          >
            <Image source={location} />
            <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 2 }}>
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
              }}
            >
              $40/hr
            </Text>
          </View>
        </View>
        <View
          style={{
            //  marginBottom: 10,
            width: "90%",
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            height: responsiveHeight(7),
            //backgroundColor: "red",
          }}
        >
          <View style={{ width: "50%", marginLeft: 5, flexDirection: "row" }}>
            <Text style={{ fontSize: 12, marginLeft: 2 }}>Date & Time</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              right: 5,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                fontWeight: "bold",
                marginLeft: 2,
              }}
            >
              June 11, 2023 | 11:00 AM
            </Text>
          </View>
        </View>
        {/* <View style={wallet.line} /> */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            // backgroundColor: "red",
          }}
        >
          <View
            style={{
              width: "30%",
              marginLeft: "6%",
              flexDirection: "row",
              height: responsiveHeight(3),
              //backgroundColor: "red",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Description
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            width: "90%",
            flexDirection: "row",
            //backgroundColor: "green",
          }}
        >
          <View
            style={{
              width: "100%",
              marginLeft: "6%",
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#E8ECF1",
              backgroundColor: "#FAFAFA",
              padding: 10,
              position: "absolute",
              zIndex: 2,
              // height: responsiveHeight(10),
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={showFullText ? undefined : 2}
                style={styles.text}
              >
                We have assigned you a plumbing task for an urgent repair at
                Sadiq Centre, Lahore.Please make arrangements to visit the
                location as soon as possible and address the issue accordingly.
                Your expertise and prompt response are greatly appreciated.
              </Text>
            </View>
            {!showFullText ? (
              <TouchableOpacity
                onPress={() => setShowFullText(true)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 3,
                  fontWeight: "600",
                  color: "blue",
                  width: 100,
                  height: 100,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    bottom: 26,
                    right: 4,
                    fontWeight: "600",
                    color: "#FFC44D",
                    fontSize: 12,
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setShowFullText(false)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 10,
                  width: 100,
                  height: 100,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    bottom: 93,
                    right: 1,
                    fontWeight: "600",
                    color: "blue",
                    fontSize: 12,
                  }}
                >
                  Less
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View
          style={{
            position: "relative",
            zIndex: 0,
            height: responsiveHeight(49),
            //sbackgroundColor: "gray",
            width: responsiveWidth(85),
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(7),
          }}
        >
          <MyMaps />
          {/* <Image
            style={{
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 0,
            }}
            source={map}
          /> */}
          <TouchableOpacity
          onPress={handleTrackClientButton}
            style={[
              styles.Btncontainers,
              {
                position: "absolute",
                zIndex: 1,
                bottom: 60,
                alignSelf: "center",
              },
            ]}
          >
            <Text style={styles.btntxts}>Track Supplier</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 30,
    width: responsiveWidth(100),
    flex: 1,
  },
  TextPin: {
    borderWidth: 1,
    width: 80,
    height: 60,
    borderRadius: 8,
    fontSize: 24,
    textAlign: "center",
    borderColor: "#D9D9D9",
  },
  btntxts: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    fontFamily: "Inter",
    fontWeight: "600",
  },
  Btncontainers: {
    width: responsiveWidth(80),
    alignSelf: "center",
    backgroundColor: "#FFC44D",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: "flex-end",
  },
  arrow_backForget: {
    top: 6,
    marginRight: 20,
  },
});

export default Detail;