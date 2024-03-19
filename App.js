import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tab';
import Login from './screens/Login/Index';
import Toast from 'react-native-toast-message';

// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import appStyle from './components/style';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function main() {
  return (
    
    <NavigationContainer>
      <Tabs/>
      <Toast />
    </NavigationContainer> 
  );
}
const styles = StyleSheet.create({
  styleAppBar: {
    padding: 20
  },
  loginContianer: {
    width: "100%",
    height: "90%",
    backgroundColor: "#FF8824",
    marginTop: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignContent: 'center',

  },
  inputStyle: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#e9810e',
    margin: 8,
  },
  rowStyle: {
    flexDirection: 'row'
  },
  buttonContainer: {
    width: "90%",
    elevation: 8,
    backgroundColor: "#FFFF",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginVertical: 15,
    alignItems: 'center',
  },
  cardContainer: {
    width: "90%",
    padding: 10,
    elevation: 10,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    borderColor: "#e9810e",
    flexDirection: 'row',
    marginTop: 60,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallRounderContainer:{
    width: "48%",
    padding: 10,
    elevation: 10,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    borderColor: "#e9810e",
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center'  
  }
  ,
  myJobContainer: {
    width: "28%",
    marginStart: 20,
    padding: 10,
    backgroundColor: "#E0C764",
    borderRadius: 10,
    borderColor: "#e9810e",
    alignItems: 'center',
  },
  rowContainer: {
    width: "70%",
    marginStart: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#CF9FFF",
    borderColor: "#e9810e",
    ustifyContent: 'center',
    alignItems: 'center',
  },
  promoContainer: {

    width: "70%",
    marginStart: 20,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#C5EC81",
    ustifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    width: "70%",
    marginStart: 20,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#DAD7D7",
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: "space-between",

  },



  buttonOnline:{
    width:"15%",
    backgroundColor:"39B54A",

  },
  rightIcon: {
    width: 30,
    height: 30,
    padding: 5,
    alignContent: "center"
  },

  
});
