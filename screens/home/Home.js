import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image,ScrollView,TouchableOpacity } from "react-native";
import appStyle from "../../style/style";
import homeStyles from "../../style/home";
import { SvgUri, SvgXml } from 'react-native-svg';
import Footer from '../Footer/Index';

const Home=() =>{
    const logo=require('../../assets/myJobs.png')
    const ic_calender=require('../../assets/ic_calendar.png')
    const ic_trannings=require('../../assets/ic_trannings.png')
    const promotion=require('../../assets/promotion.png')
    const support=require('../../assets/support.png')
    const training=require('../../assets/training.png')
    
    return (
        <ScrollView keyboardDismissMode={'on-drag'} style={{height:"100%", backgroundColor: "red",}}>
            <View>
                <View style={appStyle.cardContainer}>
                    <TextInput
                        style={appStyle.inputSearch}
                        placeholder="Find Seller"
                    ></TextInput>
                    <Image
                        style={homeStyles.rightIcon}
                        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                    />
                </View>

                <View style={homeStyles.grayContainer}></View>
                <Text style={appStyle.textHeding}>Get Services you need</Text>
                {/* main option container */}
                <View flexDirection="row" style={{ marginTop: 10 }}>
                    <View style={homeStyles.myJobContainer}>
                        <Image source={logo} style={{ width: 40, height: 40 }} />    
                        <Text style={{ fontSize: 18, color: "#383937", marginTop: 20 }}>
                            My Jobs
                        </Text>
                    </View>
                    <View style={{ width: "80%" }}>
                        <View>
                            <View flexDirection="row" style={homeStyles.rowContainer}>
                                <Image
                                    style={homeStyles.rightIcon}
                                    source={ic_calender}
                                />
                                <Text style={homeStyles.textHeading}>Scheduled Jobs</Text>
                            </View>
                        </View>

                        <View>
                            <View flexDirection="row" style={homeStyles.promoContainer}>
                                <Image
                                    style={homeStyles.rightIcon}
                                    source={ic_trannings}
                                />
                                <Text style={homeStyles.textHeading}>Training with inxgo</Text>
                            </View>
                        </View>
                    </View>
                </View>
                

                <View
                    style={{
                        flexDirection: "row",
                        marginStart: 20,
                        marginEnd: 20,
                        justifyContent: "space-between",
                    }}
                >
                    <View style={homeStyles.smallRounderContainer}>
                        <Image style={homeStyles.rightIcon} source={support} />  
                        <Text
                            style={{
                                width:110,
                                padding: 5,
                                marginStart: 5,
                                fontSize: 16,
                                color: "#383937",
                            }}
                        >
                            Contact Support
                        </Text>
                    </View>

                    <View style={homeStyles.smallRounderContainer}>
                        <Image style={homeStyles.rightIcon} source={training} /> 
                        <Text
                            style={{
                                 width:110,
                                padding: 5,
                                marginStart: 5,
                                fontSize: 16,
                                color: "#383937",
                            }}
                        >
                            Trainings with inxgo
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={homeStyles.appButtonContainer}>
                        <Text style={homeStyles.appButtonText}>Offline</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    );
}

export default Home;