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

class CommunityGuidelines extends Component {
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                  <View style={profile.welcome}>
                    <Image style={profile.arrow_back} source={arrow_back} />
                    <Text style={profile.welcomeText}>Community Guidelines</Text>
                  </View>
                </TouchableOpacity>
                <Text style={[menu.static,{fontSize: 13}]}>
                  Welcome to the INXGO community! We strive to foster a positive and inclusive environment where professionals can connect, share insights, and support each other in their career journeys. To ensure a respectful and valuable experience for all users, we have established the following community guidelines:
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  1. Respect and Professionalism:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Treat all members with respect, courtesy, and professionalism</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Refrain from engaging in any form of discrimination,harassment, or personal attacks</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Maintain a constructive and supportive tone in all interactions</Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  2. Relevant and Meaningful Contributions:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Contribute valuable insights, knowledge, and experiences related to professional growth and career development</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Stay on topic and avoid sharing irrelevant or promotional content</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Respect the intellectual property rights of others and give proper credit when sharing external content</Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  3. Be Mindful of Privacy and Confidentiality:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>We prioritize the privacy and security of your personal information</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>By using INXGO, you consent to the collection, storage, and use of your data as outlined in our Privacy Policy</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>We implement reasonable measures to protect your data but cannot guarantee absolute security</Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  4. Intellectual Property:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Protect the privacy and confidentiality of individuals and organizations</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Refrain from sharing sensitive or confidential information without proper authorization</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Obtain consent before sharing or reposting someone else's content</Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,fontWeight:'bold',marginTop:10}]}>
                  5. Report Inappropriate Content:
                </Text>
                <Text style={[menu.static,{fontSize: 13}]}>
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Report any content that violates our community guidelines or terms of service</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>If you come across spam, offensive material, or inappropriate behavior, please notify our support team immediately</Text>
                  {'\n'}
                  <Text style={{ fontSize: 15 }}>{`\u25CF`}</Text><Text style={{ marginLeft:10, }}>Your active participation in maintaining a safe and respectful community is greatly appreciated</Text>
                </Text>
                <Text style={[menu.static,{fontSize: 13,marginBottom:20}]}>
                  Failure to comply with these community guidelines may result in warnings, restrictions, or, in severe cases, the suspension or termination of your INXGO account. We reserve the right to review and take appropriate action on reported content or user behavior.
                </Text>
          </ScrollView>
    )
  }
}
export default CommunityGuidelines;