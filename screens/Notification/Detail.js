import React,{Component} from 'react';
import { StatusBar } from "expo-status-bar";
import { Dimensions,StyleSheet, Text, TextInput, View, Image,ScrollView,TouchableOpacity,TouchableHighlight } from "react-native";
import appStyle from "../../style/footer";
import profile from "../../style/profile";
import Footer from '../Footer/Index';
import { SvgUri, SvgXml } from 'react-native-svg';
import wallet from "../../style/wallet";
const image_upload=require('../../assets/image_upload.png')
const arrow_back=require('../../assets/arrow_back.png')
const rightarrow=require('../../assets/rightarrow.png')
const Loading=require('../../assets/Loading_icon.gif')
const circle=require('../../assets/icons/circle.png')
const location=require('../../assets/icons/location.png')
const hrs=require('../../assets/icons/hrs.png')
const map=require('../../assets/icons/map.png')
import { Regular } from '../../constants/fonts';
class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }
      }
    componentDidMount() {
        console.log(this.props.navigate);
    }
  render() {
    return (
        <View>
          <ScrollView keyboardDismissMode={'on-drag'} style={{backgroundColor:"#FFFFFF"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Booking')}>
              <View style={profile.welcome}>
                <Image style={profile.arrow_back} source={arrow_back} />
                <Text style={profile.welcomeText}>My Jobs</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginRight:"2%",marginLeft:"2%"}}>
              <View style={{flexDirection: 'row',width:"100%",marginTop:20}}>
                <Image  style={wallet.image} source={this.state.image?{uri:this.state.image}:image_upload} />
                <View style={wallet.LeftContainer}> 
                  <View style={{
                    flexDirection: 'row',
                  }}>
                    <Text style={{fontSize:18,fontFamily:Regular}}>
                      Mark Tuan 
                    </Text>
                  </View>
                  <Text style={{fontSize:12,fontFamily:Regular}}>Plumber</Text>
                </View>
                <View style={wallet.RightContainer}> 
                  <View style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end'
                  }}>
                    <View  style={{right:10,width:80,height:30,backgroundColor:'#FFC44D',alignSelf: "center",justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',fontFamily:Regular}}>
                        Active
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={wallet.line} />
              <View style={{ marginTop:10,marginBottom:10,width:'90%',flexDirection: 'row',alignSelf: "center",justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width:'38%',marginLeft:5,flexDirection: 'row'}}>
                    <Image source={location} />
                    <Text style={{fontSize:14,fontWeight:'bold', marginLeft:2,fontFamily:Regular}}> Sadiq Centre LHR
                    </Text>  
                  </View>
                  <View style={{width:'30%',left:10,flexDirection: 'row',alignSelf: "center",justifyContent: 'center',alignItems: 'center'}}>
                  <Image style={{width:15,height:15}} source={hrs} />
                    <Text style={{fontSize:14,textAlign: "center",fontWeight:'bold', marginLeft:2}}> 4 hrs
                    </Text> 
                  </View>
                  <View style={{width:'30%',alignSelf: "center",justifyContent: 'center',alignItems: 'center',right:5,flexDirection: 'row'}}>
                    <Image style={{width:15,height:15}} source={circle} />
                    <Text style={{fontSize:14,textAlign: "center",fontWeight:'bold', marginLeft:2}}>$40/ hr
                    </Text> 
                  </View>
              </View>
               <View style={{ marginBottom:10,width:'90%',flexDirection: 'row',alignSelf: "center",justifyContent: 'center',alignItems: 'center'}}>
                  <View style={{width:'50%',marginLeft:5,flexDirection: 'row'}}>
                    <Text style={{fontSize:12, marginLeft:2,fontFamily:Regular}}> Date & Time
                    </Text>  
                  </View>
                  <View style={{width:'50%',alignSelf: "center",justifyContent: 'center',alignItems: 'center',right:5,flexDirection: 'row'}}>
                    <Text style={{fontSize:12,textAlign: "center",fontWeight:'bold', marginLeft:2}}>
                      June 11, 2023 | 11:00 AM
                    </Text> 
                  </View>
              </View>
              <View style={wallet.line} />
               <View style={{ marginBottom:10,width:'90%',flexDirection: 'row'}}>
                  <View style={{width:'30%',marginLeft:"6%",flexDirection: 'row'}}>
                    <Text style={{fontSize:14,marginTop:10,fontWeight:'bold'}}> Description
                    </Text>  
                  </View>
              </View>
              <View style={{ marginBottom:10,width:'90%',flexDirection: 'row'}}>
                  <View style={{width:'100%',marginLeft:"6%",flexDirection: 'row',borderWidth:1,borderRadius: 10,borderColor:'#E8ECF1'}}>
                    <Text style={{paddingLeft:10,paddingRight:10,fontSize:14,marginTop:10,marginBottom:10,fontFamily:Regular}}>
                      We have assigned you a plumbing task for an urgent repair at Sadiq Centre, Lahore. Please make arrangements to visit the location as soon as possible and address the issue accordingly. Your expertise and prompt response are greatly appreciated.                    
                    </Text>  
                  </View>
              </View>
              <Image style={{width:"90%",alignSelf: "center",justifyContent: 'center',alignItems: 'center'}} source={map} />
            </View>
          </ScrollView>
          <Footer navigation={this.props.navigation} />
        </View>
        
       )
  }
}
export default Detail;