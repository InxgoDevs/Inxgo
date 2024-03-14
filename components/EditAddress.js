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
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
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
const SP_KEY =
  "pk_live_51OMCwaJs1jOKOpEMsDnaWlC7fbTI0y8oWIadwkWx8ow4gooPQyEoEFKGZqbATeo46BX2LVJexk6YHGZVRDs69xeN00enqi17VA";

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const EditAddress = ({ home, address }) => {
  const [selectedOption, setSelectedOption] = useState("first");
  const handleRadioSelect = (option) => {
    setSelectedOption(option);
  };
  const RadioButton = ({ label, selected, onSelect }) => {
    // alert(SP_KEY);
    return (
      <TouchableOpacity onPress={onSelect}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selected ? "#FFC44D" : "gray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selected && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,

                  backgroundColor: "#FFC44D",
                }}
              />
            )}
          </View>
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabView}>
      <View
        style={{
          // backgroundColor: "green",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            width: responsiveWidth(7),
            justifyContent: "center",
          }}
        >
          <RadioButton
            selected={selectedOption === "first"}
            onSelect={() => handleRadioSelect("first")}
          />
        </View>
        <View
          style={{
            // backgroundColor: "blue",
            width: responsiveWidth(70),
            padding: moderateScale(5),
            //marginBottom: responsiveHeight(3),
          }}
        >
          <Text style={styles.text1}>{home}</Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.6),
            }}
          >
            {address}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: "grey",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/Edit.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
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
  text1: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",

    // marginLeft: responsiveWidth(4),
  },
});
