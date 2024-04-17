import React, { useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

import appStyle from "../../style/login_start";
import Footer from "../Footer/Index";
import profile from "../../style/profile";
import CompDetailsCard from "../../components/CompDetailsCard";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
import { CommonImages } from "../../constants/Images";

const arrow_back = require("../../assets/arrow_back.png");

const CompleteDetails = ({ navigation }) => {
  const [selectedStep, setSelectedStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 60,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 50,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 50,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView keyboardDismissMode="on-drag" style={appStyle.body}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Jobs Details</Text>
          </View>
        </TouchableOpacity>
        <CompDetailsCard />
        <View
          style={{
            // backgroundColor: "blue",
            width: responsiveWidth(90),
            height: responsiveHeight(45),
            marginLeft: "4%",
          }}
        >
          <Text
            style={{ fontSize: 14, fontWeight: "500", fontFamily: Regular }}
          >
            Service Status
          </Text>
          <View style={{ flex: 1 }}>
            <View style={{ width: "100%", padding: 20 }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 0 ? "#FFC44D" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>1</Text> */}
                <Image
                  style={{ width: 20, height: 20 }}
                  source={CommonImages.taskComp}
                />
              </View>
              <View
                style={{
                  width: 4,
                  height: 50,
                  backgroundColor: "#f2f2f2",
                  marginLeft: "3%",
                }}
              ></View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,

                  backgroundColor: selectedStep > 1 ? "#FFC44D" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>2</Text> */}
                <Image
                  style={{ width: 20, height: 20 }}
                  source={CommonImages.taskComp}
                />
              </View>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(6),
                  left: 110,
                  top: 15,
                  position: "absolute",
                  borderRadius: 10,
                  // backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveHeight(4),
                    justifyContent: "center",
                    backgroundColor: selectedStep > 0 ? "#FFC44D" : "#fafafa",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontFamily: Regular,
                      fontWeight: "500",
                      color: selectedStep > 0 ? "black" : "#fafafa",
                    }}
                  >
                    Assigned
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontFamily: Regular,
                    fontWeight: "300",
                    color: selectedStep > 0 ? "black" : "#fafafa",
                  }}
                >
                  10:00 AM, June 23 2023
                </Text>
              </View>
              <View
                style={{
                  width: 4,
                  height: 50,
                  backgroundColor: "#f2f2f2",
                  marginLeft: "3%",
                }}
              ></View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 2 ? "#FFC44D" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>3</Text> */}
                <Image
                  style={{ width: 20, height: 20 }}
                  source={CommonImages.taskComp}
                />
              </View>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(6),
                  left: 110,
                  top: 90,
                  position: "absolute",
                  borderRadius: 10,
                  // backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveHeight(4),
                    justifyContent: "center",
                    backgroundColor: selectedStep > 1 ? "#FFC44D" : "#fafafa",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontFamily: Regular,
                      fontWeight: "500",
                      color: selectedStep > 1 ? "black" : "#fafafa",
                    }}
                  >
                    Started
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontFamily: Regular,
                    fontWeight: "300",
                    color: selectedStep > 1 ? "black" : "#fafafa",
                  }}
                >
                  10:00 AM, June 23 2023
                </Text>
              </View>
              <View
                style={{
                  width: 4,
                  height: 50,
                  backgroundColor: "#f2f2f2",
                  marginLeft: "3%",
                }}
              ></View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 3 ? "#FFC44D" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>4</Text> */}
                <Image
                  style={{ width: 20, height: 20 }}
                  source={CommonImages.taskComp}
                />
              </View>
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(6),
                  left: 110,
                  top: 165,
                  position: "absolute",
                  borderRadius: 10,
                  // backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveHeight(4),
                    justifyContent: "center",
                    backgroundColor: selectedStep > 2 ? "#FFC44D" : "#fafafa",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontFamily: Regular,
                      fontWeight: "500",
                      color: selectedStep > 2 ? "black" : "#fafafa",
                    }}
                  >
                    Completed
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontFamily: Regular,
                    fontWeight: "300",
                    color: selectedStep > 2 ? "black" : "#fafafa",
                  }}
                >
                  10:00 AM, June 23 2023
                </Text>
              </View>
            </View>
            <View
              style={{
                width: responsiveWidth(35),
                height: responsiveHeight(6),
                left: 110,
                top: 237,
                position: "absolute",
                borderRadius: 10,
                // backgroundColor: "red",
              }}
            >
              <View
                style={{
                  width: responsiveWidth(35),
                  height: responsiveHeight(4),
                  justifyContent: "center",
                  backgroundColor: selectedStep > 3 ? "#FFC44D" : "#fafafa",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontFamily: Regular,
                    fontWeight: "500",
                    color: selectedStep > 3 ? "black" : "#fafafa",
                  }}
                >
                  Paid
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontFamily: Regular,
                  fontWeight: "300",
                  color: selectedStep > 3 ? "black" : "#fafafa",
                }}
              >
                10:00 AM, June 23 2023
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                //alignItems: "center",
                padding: 29,
                position: "absolute",
                top: 0,
              }}
            >
              <Animated.View
                style={{
                  width: 5,
                  height: progress1,
                  marginTop: 10,
                  backgroundColor: "#FFC44D",
                }}
              ></Animated.View>

              <Animated.View
                style={{
                  width: 5,
                  height: progress2,
                  marginTop: 20,
                  backgroundColor: "#FFC44D",
                }}
              ></Animated.View>
              <Animated.View
                style={{
                  width: 5,
                  height: progress3,
                  marginTop: 23,
                  backgroundColor: "#FFC44D",
                }}
              ></Animated.View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                height: 50,
                width: 200,
                backgroundColor: "orange",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                alignSelf: "center",
              }}
              onPress={() => {
                if (selectedStep == 1) {
                  start1();
                }
                if (selectedStep == 2) {
                  start2();
                }
                if (selectedStep == 3) {
                  start3();
                }
                if (selectedStep == 0) {
                  setSelectedStep(selectedStep + 1);
                } else {
                  setTimeout(() => {
                    setSelectedStep(selectedStep + 1);
                  }, 3000);
                }
              }}
            >
              <Text>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer flag={"Wallet"} navigation={navigation} />
    </View>
  );
};

export default CompleteDetails;