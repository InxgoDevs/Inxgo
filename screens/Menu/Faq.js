// Faq.js
import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
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
const Faq = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      title: "How do I create an account on INXGO?",
      text: "To create an account on INXGO, simply click on the button on the login screen. Follow the prompts to enter your personal details, such as your name, email address, and password. Once completed, your account will be successfully created, and you can start exploring the app.",
    },
    {
      title: " How can I edit my profile information?",
      text: "To edit your profile, go to your Profile Button  and select the 'Edit Profile' option. From there, you can update your information as needed.",
    },
    {
      title: "How do I search for suppliers on INXGO?",
      text: "To find suppliers on INXGO, simply use the search bar on the platform's homepage and enter keywords related to the products or services you need. Then, browse through the search results to find suitable suppliers",
    },
    {
      title: "What types of services are available on INXGO?",
      text: "INXGO offers a wide range of services across more than 50 different areas, including home maintenance, beauty services, tutoring, event planning, and much more. Whether you need a plumber, a personal trainer, or a caterer, you can find it all on our platform",
    },
    {
      title: "How does the payment process work on INXGO?",

      text: "INXGO provides a secure payment system for both clients and service providers. Once a service is completed, payment can be made directly through the app using various payment methods such as credit/debit cards or digital wallets. ",
    },
    {
      title: "What happens if I encounter an issue with a Suppliers?",
      

      text: "INXGO values customer satisfaction and strives to resolve any issues promptly. If you encounter any problems with a service or provider, you can reach out to our customer support team through the app. ",
    },
    {
      title: "Can I talk to service providers before booking?",
      

      text: "Yes, INXGO allows users to communicate directly with service providers through the app's messaging feature. This enables you to discuss specific requirements, ask questions, and clarify any doubts before making a booking.  ",
    },
    {
      title: "How can I trust the service providers listed on INXGO?",
      
      

      text: "INXGO prioritizes trust and reliability. All service providers undergo a thorough verification process before being listed on our platform. Moreover, users can review and rate service providers based on their experience, helping you make informed decisions when choosing a provider. ",
     
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
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
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
    gap: 40,
  },
});

export default Faq;
