import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Regular } from "../constants/fonts";

// create a component
const CustomView = ({ imageSource, text, cashText, moneyIconSource ,amountText}) => {
    return (
      
            <View
                style={{ paddingHorizontal: 20, marginTop: 30, flexDirection: "row" }}
            >
                <View>
                    <Image source={imageSource} />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        marginTop: 5,
                        height: responsiveHeight(3),
                        overflow: "hidden",
                    }}
                >
                    <Text
                        style={{ fontSize: 18, fontWeight: "500", fontFamily: Regular }}
                    >
                        {text}
                    </Text>
                    <Text
                        style={{ fontSize: 18, fontWeight: "500", fontFamily: Regular }}
                    >
                        {amountText}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        //alignItems: "center",
                        //top: 40,
                       // right: 145,
                        position: "absolute",
                     //   backgroundColor:'red',
                        width:responsiveWidth(100),
                        marginTop:30,
                        marginLeft:90,
                    
                    
                        
                    }}
                >
                    {/* Profession */}
                    <Text style={{ fontSize: 12, fontFamily: Regular, }}>Plumber</Text>

                    <Text style={{ fontSize: 12, fontFamily: Regular,marginHorizontal:10 }}>|</Text>
                    <Text style={{ fontSize: 12, fontFamily: Regular, }}>26 May, 2023</Text>
                    <Image source={moneyIconSource} style={{ left:50}} />
                    <Text style={{ fontSize: 12, fontFamily: Regular,marginHorizontal:55, }}>
                        {cashText}
                    </Text>
                </View>
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

// make this component available to the app
export default CustomView;
