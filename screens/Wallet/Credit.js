// Import libraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { CommonImages } from "../../constants/Images";
import profile from "../../style/profile";
import {
 responsiveHeight,
 responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomButton from "../../components/CustomButton";
import { Bold, Regular } from "../../constants/fonts";
import CustomView from "../../components/CustomView";
import customImage from '../../assets/Frame.png';
import customMoneyIcon from '../../assets/Money.png';
import { moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native-gesture-handler";

// Create a component
const Credit = ({navigation}) => {
 const transactionHistory = [
    {
      text: "Mark Tuan",
      cashText: "Cash",
      moneyIconSource: customMoneyIcon,
      amountText: "$ 40",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit.png'),
      amountText: "$ 120",
    },
    {
      text: "Mark Tuan",
      cashText: "Cash",
      moneyIconSource: customMoneyIcon,
      amountText: "$ 40",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },
    {
      text: "Mark Tuan",
      cashText: "Visa ",
      moneyIconSource: require('../../assets/Credit card.png'),
      amountText: "$ 20",
    },

 ];

 return (
    <View style={styles.container}>
      <View style={profile.welcome}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Image style={profile.arrow_back} source={CommonImages.arrow} />
        </TouchableOpacity>
        <Text style={profile.welcomeText}>My Wallet</Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFC44D",
          height: responsiveHeight(25),
          width: responsiveWidth(90),
          marginLeft: 20,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height:responsiveHeight(5),
            paddingHorizontal: 20,
            //backgroundColor:'brown'
          }}
        >
          <Text style={{ marginTop:moderateScale(10), fontSize: 18, fontFamily: Regular }}>
            Jane Doe
          </Text>
          <Image
            source={require("../../assets/Symbols.png")}
            style={{ right: 10 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20,height:responsiveHeight(7) }}>
          <Text>****_****_****_**23</Text>
        </View>
        <View style={{  paddingHorizontal: 18,height:responsiveHeight(5)}}>
          <Text style={{ fontSize: 16,fontFamily:Regular }}> Balance:</Text>
        </View>
        <View style={{ paddingHorizontal: 20, flexDirection: "row",height:responsiveHeight(8),justifyContent:'space-between' }}>
          <Text style={{ fontSize: 32, fontWeight: "600",fontFamily:Bold,}}>$ 243.45</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddCredit")}>
            <Text>Add Credit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          width:responsiveWidth(100)
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600", fontFamily: Regular }}>
          Transaction History
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SeeAll')}>
          <Text style={{ fontSize: 15, color: "#FFC44D", fontFamily: Regular }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactionHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CustomView
            imageSource={customImage}
            text={item.text}
            cashText={item.cashText}
            moneyIconSource={item.moneyIconSource}
            amountText={item.amountText}
          />
        )}
      />
    </View>
 );
};

// Define your styles
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#fafafa",
 },
 btn: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 80,
    paddingVertical: 5,
    height: 30,
    marginTop: 8,
 },
});

// Make this component available to the app
export default Credit;
