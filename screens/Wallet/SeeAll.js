//import liraries
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
// create a component
const SeeAll = ({navigation}) => {
    const transactionHistory = [
       {
         text: "Mark Tuan",
         cashText: "Cash",
         moneyIconSource: customMoneyIcon,
         amountText: "$ 40",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
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
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
         moneyIconSource: require('../../assets/Credit card.png'),
         amountText: "$ 20",
       },
       {
         text: "Mark Tuan",
         cashText: "Mastercard",
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
           <Text style={profile.welcomeText}>Transaction History</Text>
         </View>
        
         <View
           style={{
             paddingHorizontal: 20,
             marginTop: 0,
             flexDirection: "row",
             justifyContent: "space-between",
           }}
         >
           
           
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
   export default SeeAll;
   