// Faq.js
import React, { useState } from "react";
import { View, FlatList, StyleSheet, Image ,Text,TouchableOpacity} from "react-native";
import FaqItem from "../../components/FaqItem";
const arrow_back = require("../../assets/arrow_back.png");
import profile from "../../style/profile";
import FaqSvg from "../../components/artworks/FaqSvg";
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  import { Regular, Thin } from "../../constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
const Faq = ({navigation}) => {
 const [activeIndex, setActiveIndex] = useState(null);

 const questions = [
    {
      title: "How do I create an account on INXGO?",
      text: "To create an account on INXGO, simply click on the button on the login screen. Follow the prompts to enter your personal details, such as your name, email address, and password. Once completed, your account will be successfully created, and you can start exploring the app.",
    },
    {
      title: " How can I edit my profile information?",
      text: "The minimum age to create an account on INXGO is 18 years old. Please ensure you are at least 18 years old before proceeding with the account creation.",
    },
    {
      title: "How do I search for suppliers on INXGO?",
      text: "If you've forgotten your password, you can reset it by clicking on the 'Forgot Password?' link on the login screen. Follow the prompts to enter your email address and receive a password reset link.",
    },
    {
      title: "Can I save jobs for later?",
      text: "Yes, a mobile number is required to create an account on INXGO. This is for verification purposes and to ensure your account's security.",
    },
 ];

 const renderItem = ({ item, index }) => (
    <FaqItem
    title={item.title}
    text={item.text}
    isExpanded={activeIndex === index}
    onPress={() => setActiveIndex(activeIndex === index ? null : index)}
  />
 );

 return (
    <SafeAreaView style={styles.container}>
      <View style={profile.welcome}>
      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
      <Image style={profile.arrow_back} source={arrow_back} />
      </TouchableOpacity>
        
        <Text style={profile.welcomeText}>
          Frequently Asked Questions{"\n"}(FAQs)
        </Text>
      </View>
      <View
        style={{
          height: responsiveHeight(30),
          width: responsiveWidth(100),
          justifyContent: "center",
          alignItems: "center",
         // backgroundColor:"red"
        }}
      >
        <FaqSvg width={400} height={400} />
      </View>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    gap:40
 },
});

export default Faq;
