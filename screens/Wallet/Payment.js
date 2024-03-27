import React, { useState } from "react";
import { StatusBar, View, Image, TouchableOpacity, ScrollView, Text } from "react-native";
import appStyle from "../../style/payment";
import profile from "../../style/profile";
import mastercard from "../../assets/icons/mastercard.png";
import paypal from "../../assets/icons/paypal.png";
import google from "../../assets/icons/icons_google.png";
import arrow_back from "../../assets/arrow_back.png";
import applepay from "../../assets/Apple pay.png";
import visa from "../../assets/Visa.png";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";

const Payment = ({ navigation }) => {
 const [activePaymentMethod, setActivePaymentMethod] = useState(null);

 const RadioButton = ({ flag, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: "flex-end" }}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#FFC44D",
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
    </TouchableOpacity>
 );

 const handlePaymentMethodPress = (method) => {
    setActivePaymentMethod(method);
 };

 return (
    
      <View style={appStyle.body}>
        <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Payment Method</Text>
          </View>
        </TouchableOpacity>
        <View style={{height:responsiveHeight(5)}}>
        <Text style={appStyle.welcome}>
          Select the payment method you want to use.
        </Text>
        </View>
        <View style={{height:responsiveHeight(50)}}>
        <View style={appStyle.appButtonSoical}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={appStyle.google} source={mastercard} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>MasterCard</Text>
            </View>
            <RadioButton
              flag={activePaymentMethod === "mastercard"}
              onPress={() => handlePaymentMethodPress("mastercard")}
            />
          </View>
        </View>
        <View style={appStyle.appButtonSoical}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={appStyle.google} source={paypal} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>Paypal</Text>
            </View>
            <RadioButton 
              flag={activePaymentMethod === "paypal"}
              onPress={() => handlePaymentMethodPress("paypal")}
            />
          </View>
        </View>
        <View style={appStyle.appButtonSoical}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={appStyle.google} source={google} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>Google Pay</Text>
            </View>
            <RadioButton
              flag={activePaymentMethod === "google"}
              onPress={() => handlePaymentMethodPress("google")}
            />
          </View>
        </View>
        <View style={appStyle.appButtonSoical}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={appStyle.applepay} source={applepay} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>Apple Pay</Text>
            </View>
            <RadioButton
              flag={activePaymentMethod === "applepay"}
              onPress={() => handlePaymentMethodPress("applepay")}
            />
          </View>
        </View>
        <View style={appStyle.appButtonSoical}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={appStyle.Visa} source={visa} />
              <Text style={{ fontSize: 16, marginLeft: 10 }}>Visa Card</Text>
            </View>
            <RadioButton
              flag={activePaymentMethod === "visa"}
              onPress={() => handlePaymentMethodPress("visa")}
            />
          </View>
        </View>
        </View>
        <View style={{height:responsiveHeight(15)}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentAdd")}
          style={appStyle.downloadView}
        >
          <Text style={appStyle.download}>Add New Card</Text>
        </TouchableOpacity>
        </View>
       
        {/* Add your continue button or loading indicator here */}
       <View  >
       <CustomButton 
          title={"Continue"}
          color="#FFC44D"
          onPress={() => navigation.navigate("PaymentAdd")}
          width={responsiveWidth(85)}
        />
       </View>
      </View>
    
 );
};

export default Payment;
