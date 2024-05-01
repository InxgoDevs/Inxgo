import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const CustomButton = ({ title, onPress, color, width }) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color, width: width }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: responsiveWidth(40),
  },
  buttonText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
});
