//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';
//import Home from '../home/Home';


const arrow_back = require("../../assets/arrow_back.png");

// create a component
const Setting = ({ navigation }) => {
    return (

        <View style={styles.container}>
       
     <View style={{alignSelf:'flex-start',bottom:350,left:20}}>
     <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
     <Image source={arrow_back}></Image>
     </TouchableOpacity>
    
     </View>
       
        <Text>Setting</Text>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Setting;
