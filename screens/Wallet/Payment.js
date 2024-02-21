import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import appStyle from "../../style/payment";
import profile from "../../style/profile";
import mastercard from "../../assets/icons/mastercard.png";
import paypal from "../../assets/icons/paypal.png";
import google from "../../assets/icons/icons_google.png";
import arrow_back from "../../assets/arrow_back.png";
// import { useFonts } from 'expo-font'; // If you're using fonts, uncomment this line

const Payment = ({ navigation }) => {
  const [counter, setCounter] = useState(0); // State variable for the counter, if needed

  // useEffect(() => {
  //   console.log(navigation); // Example of using useEffect for componentDidMount
  // }, []);

  const RadioButton = (flag) => (
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

  return (
    <ScrollView keyboardDismissMode={"on-drag"} style={appStyle.body}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Payment Method</Text>
          </View>
        </TouchableOpacity>
        <Text style={appStyle.welcome}>
          Select the payment method you want to use.
        </Text>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <View style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={mastercard} />
            <Text style={{ left: "70%", fontSize: 14, width: "25%" }}>
              MasterCard
            </Text>
            <View style={{ width: "60%", alignSelf: "flex-end" }}>
              {RadioButton(1)}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <View style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={paypal} />
            <Text style={{ left: "70%", fontSize: 14, width: "25%" }}>
              Paypal
            </Text>
            <View style={{ width: "60%", alignSelf: "flex-end" }}>
              {RadioButton(0)}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={appStyle.appButtonSoical}>
          <View style={appStyle.appButtonTextSoical}>
            <Image style={appStyle.google} source={google} />
            <Text style={{ left: "70%", fontSize: 14, width: "25%" }}>
              Google
            </Text>
            <View style={{ width: "60%", alignSelf: "flex-end" }}>
              {RadioButton(0)}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentAdd")}
          style={appStyle.downloadView}
        >
          <Text style={appStyle.download}>Add New Card</Text>
        </TouchableOpacity>
        {/* Add your continue button or loading indicator here */}
      </View>
    </ScrollView>
  );
};

export default Payment;
