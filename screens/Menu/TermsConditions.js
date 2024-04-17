import React,{Component} from 'react';
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Image,Button,TouchableOpacity,ScrollView } from "react-native";
import appStyle from "../../style/login_start";
import profile from "../../style/profile";
import menu from "../../style/menu";
import Footer from '../Footer/Index';
import wallet from "../../style/wallet";
import ApiCall from "../../Services/ApiCall";
import SvgUri from 'react-native-svg-uri';
import { NavigationContainer } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'
import Toast from 'react-native-toast-message';
import MyGlobleSetting from '../../Services/MyGlobleSetting';
const image_upload=require('../../assets/image_upload.png')
const arrow_back=require('../../assets/arrow_back.png')
const Loading=require('../../assets/Loading_icon.gif')
const rightarrow=require('../../assets/rightarrow.png')
import ProfileSvg from '../../assets/svg/profile.svg';
import dangercircle from '../../assets/svg/dangercircle.svg';
import languageSvg from '../../assets/svg/languageSvg.svg';
import location from '../../assets/svg/location.svg';
import lock from '../../assets/svg/lock.svg';
import logout from '../../assets/svg/logout.svg';
import notification from '../../assets/svg/notification.svg';
import shielddone from '../../assets/svg/shielddone.svg';
import walletSvg from '../../assets/svg/wallet.svg';

class TermsConditions extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false,
      image:null,
    }
  }
  render() {
     return(
          <ScrollView keyboardDismissMode={'on-drag'} style={{height:'100%',backgroundColor:'white'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={profile.welcome}>
                    <Image style={profile.arrow_back} source={arrow_back} />
                    <Text style={profile.welcomeText}>Terms and Conditions</Text>
                  </View>
                </TouchableOpacity>
                <Text style={[menu.static,{fontSize: 13}]}>
                Welcome to INXGO! Before using our app, we kindly ask you to read and agree to the following Terms and Conditions. By accessing and using INXGO, you acknowledge that you have read, understood, and accepted these terms, which govern your use of our services. If you do not agree to these terms, please refrain from using our app. 
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  1. User Responsibilities:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    You must be at least 18 years old to use INXGO or have appropriate legal consent.
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    Refrain from engaging in any form of discrimination,harassment, or personal attacks
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    You agree not to misuse or engage in any unlawful activities on the app
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    You will not use INXGO to harass, defame, or harm others.
                  </Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  2. Account Security:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    You are responsible for maintaining the security of your INXGO account credentials.
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                  You must promptly notify us of any unauthorized use or breach of your account.
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                  We reserve the right to suspend or terminate your account if we suspect any fraudulent activity.
                  </Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  3. Privacy and Data Protection:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                  We prioritize the privacy and security of your personal information.
                </Text>
                {'\n'}
                <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                  By using INXGO, you consent to the collection, storage, and use of your data as outlined in our Privacy Policy.
                </Text>
                {'\n'}
                <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                  We implement reasonable measures to protect your data but cannot guarantee absolute security.
                </Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  4. Intellectual Property:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    INXGO and its content are protected by intellectual property rights.
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    You agree not to copy, modify, distribute, or reproduce any part of the app without our prior written consent.
                  </Text>

                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  5. Limitation of Liability:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    NXGO provides job listings and facilitates connections, but we do not endorse or guarantee the accuracy, availability, or suitability of any job opportunities.
                  </Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>
                    We are not liable for any direct, indirect, or consequential damages arising from your use of the app or any third-party links or content.
                  </Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,marginBottom:20,marginTop:10}]}>
                  By using INXGO, you agree to indemnify and hold us harmless from any claims, losses, or damages that may arise from your use of the app. If you have any questions or concerns regarding these Terms and Conditions, please contact us. 
                </Text>
                <Text style={[menu.static,{fontSize: 13,marginBottom:20}]}>
                  Thank you for choosing INXGO, and we look forward to helping you navigate your career journey.
                </Text>
          </ScrollView>
    )
  }
}
export default TermsConditions;