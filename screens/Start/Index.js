import React,{Component} from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,ScrollView } from "react-native";
import appStyle from "../../style/start";
import { SvgUri, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleCarousel, Banner,Card } from 'react-native-simple-banner-carousel';
const start1=require('../../assets/start1.png')
const start2=require('../../assets/start2.png')
const start3=require('../../assets/start3.png')
class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    console.log('this.props');
  }
  render() {
    return(
        <ScrollView keyboardDismissMode={'on-drag'} style={{ backgroundColor: "#fff"}}>
            <View style={appStyle.container}>
              <View style={{
                width: '100%',
                paddingVertical: 50,
                height:550,
                marginTop:100,
              }}>
                <SimpleCarousel 
                  data={[{
                        title: 'We provide professional job services for you',
                      source: start1,
                    },
                    {
                      
                       title: 'The place where work finds you',
                      source: start2,
                    },
                    {
                      
                       title: 'Let’s start your career with InxGo!',
                      source: start3,
                    },
                  ]}
                  renderItem={(props, i, width) => {
                    return (
                        <View >
                        <View >
                            <Image
                                resizeMode="cover"
                                style=
                                {{
                                    width:width,
                                    height:300,
                                    repeat:'no-repeat',
                                }}
                                source={props.source}
                            />
                        </View >    
                        <View style={{paddingLeft:30,height:400,width:300,textAlign:'center', alignItems: 'center'}}>
                            <Text style={{ lineHeight:30,fontWeight:600,fontSize:28}}>{props.title}</Text>
                        </View>
                        </View>
                    )
                  }} 
                />
              </View>
              <StatusBar translucent={true} />
            </View>
            <View style={{ backgroundColor: "#fff"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('StartLogin')} style={appStyle.appButtonContainer}>
                    <Text style={appStyle.appButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
  }
}
export default Index;