import React,{Component} from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,ScrollView } from "react-native";
import appStyle from "../../style/login_start";
import signUpStyle from "../../style/SignUp";
import { SvgUri, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
const start3=require('../../assets/start3.png')
const message=require('../../assets/icons/message.png')
const email=require('../../assets/icons/email.png')
import { useFonts } from 'expo-font';
// const [loaded] = useFonts({
//     Montserrat: require('../../assets/fonts/font.ttf'),
//   });
class Forget extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return(
        <ScrollView keyboardDismissMode={'on-drag'} style={appStyle.body}>
            <View>
                <Text style={signUpStyle.welcome}>Forget Password</Text>
                 <Image style={appStyle.logo} source={start3} />  
                <View style={appStyle.cardContainer}>
                    <View style={appStyle.leftContainer}>
                        <Text style={appStyle.rowLabelText}>
                         Select which contact details should we use to reset your password
                        </Text>
                     </View>
                </View>
                <View style={appStyle.smallRounderContainer}>
                        <View style={appStyle.leftContainerForget}> 
                            <Image style={appStyle.rightIconForget} source={message} />
                        </View>
                    <View style={appStyle.rightContainerForget}>
                        <Text
                          style={{
                            width:'100%',
                            fontSize: 14,
                            color: "#000",
                            bottom:9,
                             marginLeft:30,
                            fontWeight:'Bold',
                          }}
                        >
                            via SMS:
                        </Text>
                        <Text
                          style={{
                            width:'100%',
                            fontSize: 14,
                            color: "#000",
                            bottom:9,
                             marginLeft:30,
                            fontWeight:'Bold',
                          }}
                        >
                            +92 334 ******7
                        </Text>
                    </View>
                </View>
                <View style={appStyle.smallRounderContainer}>
                        <View style={appStyle.leftContainerForget}> 
                            <Image style={appStyle.rightIconForget} source={email} />
                        </View>
                    <View style={appStyle.rightContainerForget}>
                        <Text
                          style={{
                            width:200,
                            fontSize: 14,
                            color: "#000",
                            bottom:9,
                             marginLeft:80,
                            fontWeight:'Bold',
                          }}
                        >
                            via Email:
                        </Text>
                        <Text
                          style={{
                            width:200,
                            fontSize: 14,
                            color: "#000",
                            bottom:9,
                            marginLeft:80,
                            fontWeight:'Bold',
                          }}
                        >
                            ja****oe@yourdomain.com
                        </Text>
                    </View>
                </View>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={appStyle.appButtonContainer}>
                    <Text style={appStyle.appButtonText}>Continue</Text>
                </TouchableOpacity>
                <View style={{height:10}}>
                </View> 
            </View>
        </ScrollView>
    )
  }
}
export default Forget;