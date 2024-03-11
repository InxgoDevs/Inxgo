import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  About,
  Notification,
  TermsConditions,
  CommunityGuidelines,
  Country,
  Menu,
  Home,
  Messages,
  Login,
  Start,
  StartLogin,
  SignUp,
  Forget,
  Profile,
  Wallet,
  Payment,
  PaymentAdd,
  Booking,
  Detail,
} from "../screens";
import { component, Alert, View, StyleSheet, Button } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pending from "../screens/Booking/Pending";

import Index from '../screens/Login/Index.js';
import ForgotPswd from '../screens/Login/ForgotPswd';
import NewPassword from '../screens/Login/NewPassword';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const asyncFetchDailyData = async () => {
      var isLogin = await AsyncStorage.getItem("isLogin");
      if (isLogin) {
        await setUsers(true);
      } else {
        await setUsers(false);
      }
    };
    asyncFetchDailyData();
  }, [users]);

  const options = { headerShown: false, tabBarStyle: { display: "none" } };

  return (
    <Tab.Navigator
      initialRouteName={!users ? "Home" : "Home"}
      screenOptions={options}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Start" component={Start} />
      <Tab.Screen name="StartLogin" component={StartLogin} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Forget" component={Forget} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="PaymentAdd" component={PaymentAdd} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Country" component={Country} />
      <Tab.Screen name="CommunityGuidelines" component={CommunityGuidelines} />
      <Tab.Screen name="TermsConditions" component={TermsConditions} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Index" component={Index} />      
      <Tab.Screen name="ForgotPswd" component={ForgotPswd} />
      <Tab.Screen name="NewPassword" component={NewPassword} />
      <Tab.Screen name="Pending" component={Pending} />





    </Tab.Navigator>
  );
};

export default Tabs;
