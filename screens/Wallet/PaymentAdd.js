import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import appStyle from "../../style/payment";
import profile from "../../style/profile";
import login_start from "../../style/login_start";
import { SvgUri, SvgXml } from "react-native-svg";
import { NavigationContainer } from "@react-navigation/native";
const login = require("../../assets/Visalogo.png");
const google = require("../../assets/icons/icons_google.png");
const mastercard = require("../../assets/icons/mastercard.png");
const paypal = require("../../assets/icons/paypal.png");
const arrow_back = require("../../assets/arrow_back.png");
import { useFonts } from "expo-font";

const PaymentAdd = ({ navigation }) => {
  const [state, setState] = useState({
    counter: 0,
    flag: false,
  });

  useEffect(() => {
    console.log(navigation);
  }, []);

  const RadioButton = (flag) => {
    return (
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#FFC44D",
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {flag ? (
          <View
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              backgroundColor: "#FFC44D",
            }}
          />
        ) : null}
      </View>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, flag: true });
    // Add your form submission logic here
  };

  return (
    <ScrollView keyboardDismissMode={"on-drag"} style={appStyle.body}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
          </View>
          <Image style={appStyle.logo} source={login} />
        </TouchableOpacity>

        <Text style={appStyle.paymentAdd}>
          Enter the debit or credit card you would like to make payment.
        </Text>

        <View style={{ flexDirection: "row", left: "4%", marginTop: 20 }}>
          <Text>Credit Card Number</Text>
        </View>
        <View style={login_start.cardContainer}>
          <TextInput
            theme={{
              colors: { primary: "#FAFAFA", underlineColor: "transparent" },
            }}
            style={appStyle.inputPayment}
            placeholder="****_****_****_**23"
            underlineColor="transparent"
            keyboardType="numeric" // Ensures the keyboard type is numeric
            maxLength={14}
          />
        </View>

        <View style={{ flexDirection: "row", left: "4%" }}>
          <Text>Name</Text>
        </View>
        <View style={login_start.cardContainer}>
          <TextInput
            theme={{
              colors: { primary: "#FAFAFA", underlineColor: "transparent" },
            }}
            style={appStyle.inputPayment}
            placeholder="Full Name"
            underlineColor="transparent"
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%", flexDirection: "row", left: "6%" }}>
            <Text>Date</Text>
          </View>
          <View style={{ width: "50%", flexDirection: "row" }}>
            <Text>Cvc</Text>
          </View>
        </View>
        <View style={login_start.cardContainer}>
          <TextInput
            theme={{
              colors: { primary: "#FAFAFA", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            placeholder="DD/MM/YY"
            underlineColor="transparent"
          />
          <TextInput
            theme={{
              colors: { primary: "#FAFAFA", underlineColor: "transparent" },
            }}
            style={appStyle.inputSearch}
            placeholder="Cvc"
            underlineColor="transparent"
            keyboardType="numeric" // Ensures the keyboard type is numeric
            maxLength={3}
          />
        </View>

        <View style={{ marginTop: "40%" }} />

        <View
          style={{ width: "100%", height: 50, position: "absolute", bottom: 0 }}
        >
          {!state.flag ? (
            <TouchableOpacity
              onPress={handleSubmit}
              style={profile.appButtonContainer}
            >
              <Text style={appStyle.appButtonText}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <Image
              style={{
                width: 200,
                height: 100,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                resizeMode: "stretch",
              }}
              source={Loading}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentAdd;
