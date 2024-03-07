import React, { useState } from "react";
import appStyle from "../../style/login_start";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import signUpStyle from "../../style/SignUp";

const arrow_back = require("../../assets/arrow_back.png");
const blind = require("../../assets/Blind.png");
const openeye = require("../../assets/openeye.png");
const lock = require("../../assets/Lock.png");
const newpassword = require("../../assets/newpassword.png");

// create a component
const NewPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "newPassword") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Index")}>
          <Image source={arrow_back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Create New Password</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={newpassword} style={styles.logo} />
      </View>
      <View style={{ height: responsiveHeight(5) }}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 15 }}>
          Create New Password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subTitle}>New Password</Text>
        <View style={styles.passwordContainer}>
          <Image source={lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="Enter new password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => togglePasswordVisibility("newPassword")}
          >
            <Image source={passwordVisible ? openeye : blind} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <Image source={lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm new password"
            secureTextEntry={!confirmPasswordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => togglePasswordVisibility("confirmPassword")}
          >
            <Image source={confirmPasswordVisible ? openeye : blind} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: responsiveHeight(20) }}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPassword")} style={styles.btncontainer}>
          <Text style={styles.buttontxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(100),
    backgroundColor: "#fff",
  },
  btncontainer: {
    width: responsiveWidth(80),
    backgroundColor: "#FFC44D",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: "center",
    bottom: 40,
    position: "absolute",
  },
  buttontxt: {
    fontSize: 14,
    color: "black",
    alignSelf: "center",
    fontFamily: "Inter",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: responsiveHeight(10),
    paddingHorizontal: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 20,
  },
  imageContainer: {
    height: responsiveHeight(40),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
    resizeMode: "contain",
  },
  inputContainer: {
    height: responsiveHeight(25),
    padding: 15,
  },
  subTitle: {
    fontSize: 13,
    marginBottom: 10,
    top: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    padding: 10,
    flex: 1,
    paddingLeft: 40,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: 10,
    zIndex: 1,
    width: 16, // Adjust width as needed
    height: 16,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    // width: 14,
    // height: 14,
  },
  eyeIcon: {
    width: 16,
    height: 16,
  },
});

export default NewPassword;
