import React,{Component} from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,ScrollView } from "react-native";
import appStyle from "../../style/login_start";
import { SvgUri, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
const login=require('../../assets/login.png')
const apple=require('../../assets/apple.png')
const google=require('../../assets/google.png')
const facebook=require('../../assets/facebook.png')
import { useFonts } from 'expo-font';
// const [loaded] = useFonts({
//     Montserrat: require('../../assets/fonts/font.ttf'),
//   });
class Start extends Component {
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
        <ScrollView keyboardDismissMode={'on-drag'}>
            <View>
                <Image style={appStyle.logo} source={login} />  
                <Text style={appStyle.welcome}>Let’s you in</Text>
                <TouchableOpacity  style={appStyle.appButtonSoical}>
                    <Text style={appStyle.appButtonTextSoical}>
                        <Image style={appStyle.google} source={google} />
                        Continue With Google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={appStyle.appButtonSoical}>
                    <Text style={appStyle.appButtonTextSoical}>
                        <Image style={appStyle.google} source={apple} />
                        Continue With Apple
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={appStyle.appButtonSoical}>
                    <Text style={appStyle.appButtonTextSoical}>
                        <Image style={appStyle.google} source={facebook} />
                        Continue With Facebook
                    </Text>
                </TouchableOpacity>
                <View style={appStyle.cardContainer}>
                    <View style={appStyle.line} />
                    <View>
                        <Text style={appStyle.lineText}>Or</Text>
                    </View>
                    <View style={appStyle.line} />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={appStyle.appButtonContainer}>
                    <Text style={appStyle.appButtonText}>Sign in with password</Text>
                </TouchableOpacity>
                <View style={appStyle.cardContainer}>
                    <Text style={appStyle.signUp}>Don’t have account? </Text>
                    <Text onPress={() => this.props.navigation.navigate('SignUp')}  style={appStyle.signUpText}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>
    )
  }
}
export default Start;