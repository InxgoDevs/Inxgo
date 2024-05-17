import React, { useState, useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Regular } from "../constants/fonts";
//import { Bold, Regular } from "../../constants/fonts";
const Switcher = () => {
  // ref
  const [Bottomtab, setBottomTab] = useState(0);
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <View style={styles.upperBotm}>
      <TouchableOpacity
        style={{
          width: responsiveWidth(45),
          height: responsiveHeight(5),
          borderRadius: moderateScale(20),
          backgroundColor: Bottomtab == 0 ? "#FFC44D" : "#FAFAFA",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onPress={() => {
          setBottomTab(0);
        }}
      >
        <Text
          style={{
            color: Bottomtab == 0 ? "#000000" : "#000000",
            fontSize: responsiveFontSize(1.8),
            fontWeight: 700,
          }}
        >
          Seller
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: responsiveWidth(45),
          height: responsiveHeight(5),
          borderRadius: moderateScale(20),
          backgroundColor: Bottomtab == 1 ? "#FFC44D" : "#FAFAFA",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onPress={() => {
          setBottomTab(1);
          navigation.navigate('Home');
        }}
      >
        <Text
          style={{
            color: Bottomtab == 1 ? "#000000" : "#000000",
            fontSize: responsiveFontSize(1.6),
            fontWeight: 600,
          }}
        >
          Client
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          width: responsiveWidth(28),
          height: responsiveHeight(6.5),
          borderRadius: moderateScale(20),
          backgroundColor: Bottomtab == 2 ? "#FFC44D" : "#FAFAFA",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
        onPress={() => {
          setBottomTab(2);
        }}
      >
        <Text
          style={{
            color: Bottomtab == 1 ? "#000000" : "#000000",
            fontSize: responsiveFontSize(1.6),
            fontWeight: 600,
          }}
        >
          Expert
        </Text>
        <Text style={{fontSize:12,fontFamily:Regular}}>Avg. $41 / hr</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "grey",
    // alignContent: "center",
    //gap:50
  },
  ViewPool: {
    position: "absolute",
    bottom: responsiveHeight(1),
  },
  bootomSheet: {
    width: responsiveWidth(100),
    height: responsiveHeight(90),
    zIndex: 0,
   // backgroundColor: "green",
    //alignItems: "center",
    borderRadius: moderateScale(35),
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  contentContainer: {
    flex: 1,
    //alignItems: "center",
  },
  upperBotm: {
    zIndex: 0,
    width: responsiveWidth(90),
    alignItems: "center",
    height: responsiveHeight(8),
    bottom:30,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderRadius: moderateScale(30),
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",

    // marginLeft: responsiveWidth(4),
  },
  inputBox: {
    // backgroundColor: 'grey',
    margin: moderateScale(14),
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    marginLeft: moderateScale(15),
    fontSize: 17,
    fontWeight: "600",
    color: "#434343",
  },
  keyboardAvoidingContainer: {
    //flex: 1,
    zIndex: 1,
    // marginTop: responsiveHeight(2),
    // height: responsiveHeight(100),
    //backgroundColor: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    height: responsiveHeight(7),
    borderRadius: moderateScale(10),
    paddingLeft: responsiveWidth(1.5),
    width: responsiveWidth(83),
  },
  tabView: {
    flexDirection: "row",
    //backgroundColor: "red",
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: "center",
  },
});

export default Switcher;
