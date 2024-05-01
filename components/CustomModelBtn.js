import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const CustomModelBtn = ({ buttontitle, onPress, color, width, height }) => {
  return (
    <View style={{ alignSelf: "center", top: 60 }}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: color, width: width, height: height },
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttontitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomModelBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    // paddingVertical: 12,
    //paddingHorizontal: 40,
    borderRadius: 25,
    justifyContent: "center",
    // width: responsiveWidth(40),
  },
  buttonText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});
