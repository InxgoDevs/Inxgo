//import liraries
import React, { useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import appStyle from "../../style/login_start";
import { responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";
import signUpStyle from "../../style/SignUp";
import CustomButton from '../../components/CustomButton';

import Canceltext from "../../components/CancelText";
import { TextInput } from "react-native-paper";

const arrow_back = require("../../assets/arrow_back.png");
// create a component
const CancelScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState("first");
  const handleRadioSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    
    <View style={styles.container}>
      <View
        style={{
          height: responsiveHeight(10),
          marginTop: 30,
          justifyContent: "flex-start",
          marginLeft: 20,
          top: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Tracker")}>
          <Image style={appStyle.arrow_backF} source={arrow_back} />
        </TouchableOpacity>

        <Text style={signUpStyle.welcomeF}>Cancel Task</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{fontSize:13,fontWeight:"300"}}>Please select the reason for cancellation.</Text>
      </View>

      <Canceltext Cancel="Waiting for long time" />
     <Canceltext Cancel="Unable to contact supplier" />
     <Canceltext Cancel="Wrong information shown" />
     <Canceltext Cancel="The price is not reasonable" />
    
   
     <View style={{marginTop:20,left:20}}>
     <Text style={{fontSize:16,fontWeight:"500"}}>Others</Text>

     </View>
     <View>
     <TextInput
          mode="outlined"
          theme={{
            colors: { primary: "black", underlineColor: "transparent" },
          }}
          style={styles.inputSearchs}
          placeholder="Other Reasons"
        />

     </View>
     <View>
        <CustomButton title={"Submit"} color= '#FFC44D'  onPress={()=>navigation.navigate('CancelScreen')}  width={responsiveWidth(80)}/>
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
//   Text: {
//     borderWidth: 1,
//     width:responsiveWidth (85),
//     height: 50,
//     borderRadius:10,
//     fontSize: 13,
//     //textAlign: 'center',
//     borderColor: "black",
//     backgroundColor:"#FAFAFA"
//   },
inputSearchs: {
    width: responsiveWidth(85),
    // left: 10,
    // textAlign: "right",
    // marginLeft: 10, // Add left padding to move text slightly to the right

    paddingHorizontal:5,
    fontSize:13,
    
    //borderWidth:.5,

    zIndex: 0, // Ensure border has z-index of 0
   margin: 20,
   
  },
 
});

//make this component available to the app
export default CancelScreen;
