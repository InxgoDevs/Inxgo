import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import CustomButton from '../../components/CustomButton';

import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { Regular } from '../../constants/fonts';
const arrow_back = require("../../assets/arrow_back.png");

const AddCredit = ({navigation}) => {
    // State to manage the input value
    const [inputValue, setInputValue] = useState('');

    // Handlers for the buttons
    const handleButtonClick = (amount) => {
        setInputValue(amount);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    height: responsiveHeight(7),
                    width: responsiveWidth(100),
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    left: 10
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image style={appStyle.arrow_backF} source={arrow_back} />
                </TouchableOpacity>
                <Text style={signUpStyle.welcomeF}>Enter the Credit</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 14, fontFamily: Regular, fontWeight: '200' }}>Enter the credit amount</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="$"
                    keyboardType="numeric"
                    value={inputValue} // Bind the state to the value prop
                    onChangeText={(text) => setInputValue(text)} // Update the state when the text changes
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.btn} onPress={() => handleButtonClick('$20')}>
                    <Text style={{ color: '#FFC44D', textAlign: 'center',fontSize:18 }}>$20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handleButtonClick('$100')}>
                    <Text style={{ color: '#FFC44D', textAlign: 'center',fontSize:18 }}>$100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handleButtonClick('$200')}>
                    <Text style={{ color: '#FFC44D', textAlign: 'center',fontSize:18}}>$200</Text>
                </TouchableOpacity>
            </View>
            <View style={{ top: 70 }}>
                <CustomButton
                    title={"Continue"}
                    color="#FFC44D"
                    width={responsiveWidth(90)}
                    // onPress={handleEndButtonClick}
                />
            </View>
        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    input: {
        height: responsiveHeight(15),
        top: 20,
        borderColor: '#FFC44D',
        borderWidth: 2,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        width: responsiveWidth(90),
        marginLeft: 20,
        alignItems: "center",
        fontSize:40,
        fontFamily:Regular,
        fontWeight:"600",
        textAlign:'center',
        borderRadius:20
    },
    btn: {
        backgroundColor: "white",
        borderRadius: 15,
        marginLeft: 10,
        paddingVertical: 5,
        height:40,
        marginTop: 50,
        width: responsiveWidth(30),
        borderWidth: 1,
        borderColor: '#FFC44D'
    },
});

// Make this component available to the app
export default AddCredit;
