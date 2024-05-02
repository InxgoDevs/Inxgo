//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from "../../constants/fonts";
import appStyle from "../../style/login_start";
import Toast from "react-native-toast-message";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Bold } from "../../constants/fonts";
import profile from "../../style/profile";
import CustomButton from "../../components/CustomButton";

const arrow_back = require("../../assets/arrow_back.png");
// create a component
const SupplierProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
      <TouchableOpacity>
      <Image style={profile.arrow_back} source={arrow_back} />
      </TouchableOpacity>
       
        <Text style={profile.welcomeText}>Provider Profile</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center",width:responsiveWidth(100),height:responsiveHeight(17) }}>
        <Image source={require("../../assets/profilepic.png")} style={{resizeMode:"contain",height:responsiveHeight(17),width:responsiveWidth(80)}} />
       
      </View>
      <View style={{justifyContent:'center',alignItems:'center',height:responsiveHeight(7)}}>
      <Text style={{ fontSize: 24, fontFamily: Regular, fontWeight: "600" }}>
          Mark Tuan
        </Text>
        <Text style={{ fontSize: 16, fontFamily: Regular }}>Plumber</Text>
      </View>
      <View style={{height:responsiveHeight(18)}}>

      
      <View
        style={{
          flexDirection: "row",
          justifyContent: 'space-around',
          alignItems: "center",
          //backgroundColor:"gray",
          height:responsiveHeight(8),
          width:responsiveWidth(100),
          marginTop:25

        }}
      >
        <Image source={require("../../assets/star.png")} style={{height:50,width:50}} />
        <Image source={require("../../assets/bag.png")} style={{height:50,width:50}} />
        <Image source={require("../../assets/dollar.png")} style={{height:50,width:50}} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width:responsiveWidth(100),
         // backgroundColor:'purple'

        }}
      >
        <Text style={{fontSize:15,fontFamily:Bold,left:2}}>4.7</Text>
        <Text style={{fontSize:15,fontFamily:Bold,left:3}}>104</Text>
        <Text style={{fontSize:15,fontFamily:Bold,left:2}}>$40</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width:responsiveWidth(100),
        //  backgroundColor:'red'

        }}
      >
        <Text style={{fontSize:11,fontFamily:Regular}}>Ratings</Text>
        <Text style={{fontSize:11,fontFamily:Regular,right:3}}>Tasks</Text>
        <Text style={{fontSize:11, fontFamily:Regular}}>Hourly</Text>
      </View>
      </View>
      <Text style={{fontSize:14,fontFamily:Regular,fontWeight:'700',marginLeft:20}}>About Me:</Text>
      <View style={{width:responsiveWidth(100),height:responsiveHeight(11)}}>
      <Text style={{fontSize:12,marginLeft:20,paddingHorizontal:3,paddingVertical:2}}>
        Dedicated and highly skilled plumber with 5+ years of experience
        providing exceptional plumbing services. Proficient in diagnosing,
        repairing, and installing various plumbing systems. Committed to
        delivering high-quality workmanship and outstanding customer service.
      </Text>
      </View>
      
      <Text style={{fontSize:14,fontFamily:Regular,fontWeight:'700',marginLeft:20}}>Key Skills:</Text>
      <View style={{width:responsiveWidth(100),height:responsiveHeight(12)}}>
       <Text style={{marginLeft:20,fontSize:12,fontFamily:Regular,paddingVertical:2}}>1. Plumbing Systems Installation and Repair{"\n"}
 2. Pipefitting and Welding{"\n"}
3. Drainage Systems Maintenance{"\n"}
4. Water Heater Installation and Maintenance{"\n"}
5. Fixture Replacement and Repair</Text>

      </View>
     
<View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width:responsiveWidth(100),
          height:responsiveHeight(10),
       //  backgroundColor:"gray"
          
        }}
      >
        <Image source={require("../../assets/person.png")} />
        <Image source={require("../../assets/portfolio.png")} />
        <Image source={require("../../assets/review.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent:'space-around',
          alignItems: "center",
         // backgroundColor:'red',
          height:responsiveHeight(2),
          width:responsiveWidth(100)
        }}
      >
        <Text style={{fontSize:11,fontFamily:Regular}}>Profile</Text>
        <Text style={{fontSize:11,fontFamily:Regular,left:4}}>Portfolio</Text>
        <Text style={{fontSize:11, fontFamily:Regular}}>Reviews</Text>
      </View>
      <View style={{height:responsiveHeight(10),justifyContent:'center'} }>
        <CustomButton
          title={"Hire Me"}
          color="#FFC44D"
          width={responsiveWidth(90)}
          onPress={()=>navigation.navigate("SignUp")}
        />
     </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#FAFAFA",
  },
  welcome: {
    //marginTop:50,
    fontSize: 20,
    //marginLeft:20,
    flexDirection: "row",
    // alignSelf: "center",
    // justifyContent: 'center',
    // alignItems: 'center',
   //  backgroundColor:"orange",
    height: responsiveHeight(5),
  },
 
});

//make this component available to the app
export default SupplierProfile;
