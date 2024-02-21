import React,{useState,useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { About,Notification,TermsConditions,CommunityGuidelines,Country,Menu,Home,Messages,Login,Start,StartLogin,SignUp,Forget,Profile,Wallet,Payment,PaymentAdd,Booking,Detail } from '../screens';
import {component, Alert, View, StyleSheet, Button } from "react-native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const Tabs=(props)=>{
	const [users,setUsers] = useState([]);
	useEffect(() => {
		const asyncFetchDailyData = async () => {
	    	var isLogin=await AsyncStorage.getItem('isLogin');
  			if(isLogin)
  			{
  				await setUsers(true);
  			}
  			else
  			{
  				await setUsers(false);
  			}
	  	}
		asyncFetchDailyData();
	}, [users]);
	const options={ headerShown: false,tabBarStyle: { display: "none" } };
	console.log(users);
return(
    <Tab.Navigator {...{initialRouteName: !users ?'Home':'Start' }}>
	  <Tab.Screen name="Profile" component={Profile} options={options} />
	  <Tab.Screen name="SignUp" component={SignUp} options={options} />
	  <Tab.Screen name="Home" component={Home} options={options} />
	  <Tab.Screen name="Start" component={Start} options={options} />
	  <Tab.Screen name="StartLogin" component={StartLogin} options={options} />
	  <Tab.Screen name="Login" component={Login} options={options} />
	  <Tab.Screen name="Messages" component={Messages} options={options} />
	  <Tab.Screen name="Forget" component={Forget} options={options} />
	  <Tab.Screen name="Wallet" component={Wallet} options={options} />
	  <Tab.Screen name="Payment" component={Payment} options={options} />
	  <Tab.Screen name="PaymentAdd" component={PaymentAdd} options={options} />
	  <Tab.Screen name="Booking" component={Booking} options={options} />
	  <Tab.Screen name="Detail" component={Detail} options={options} />
	  <Tab.Screen name="Menu" component={Menu} options={options} />
	  <Tab.Screen name="Country" component={Country} options={options} />
	  <Tab.Screen name="CommunityGuidelines" component={CommunityGuidelines} options={options} />
	  <Tab.Screen name="TermsConditions" component={TermsConditions} options={options} />
	  <Tab.Screen name="Notification" component={Notification} options={options} />
	  <Tab.Screen name="About" component={About} options={options} />
    </Tab.Navigator>
    )
}
export default Tabs;
