import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress, color }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
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
  },
  buttonText: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
});
