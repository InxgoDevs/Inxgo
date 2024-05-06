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
  SplashScreen,
  Onboarding,
  IntroScreen01,
  IntroScreen02,
  LogInScreen,
  Pending,
  Application,
  General,
  ResetCode,
  NewPassword,
  LocationBottomSheet,
  RateSupplierBSheet,
  CancelScreen,
} from "../screens";
import SupplierProfile from "../screens/home/SupplierProfile";
import { component, Alert, View, StyleSheet, Button } from "react-native";
//import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Accepted from "../screens/Booking/Accepted";
import Tracker from "../screens/Booking/Tracker";
import Security from "../screens/Security/Index";
import ProfileNotifications from "../screens/ProfileNotifications/index";
import Languages from "../screens/ProfileNotifications/Languages";
import Credit from "../screens/Wallet/Credit";
import AddCredit from "../screens/Wallet/AddCredit";
import EditProfile from "../screens/Profile/EditProfile";
import SeeAll from "../screens/Wallet/SeeAll";
import CompleteDetails from "../screens/Booking/CompleteDetails";
import TrackerMain from "../screens/Booking/TrackerMain";
import Faq from "../screens/Menu/Faq";
import ViewAll from "../screens/home/ViewAll";
import List from "../screens/Booking/Map";
import Map from "../screens/Booking/List";
import SearchProvider from "../screens/Booking/SearchProvider";
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
      initialRouteName={!users ? "Login" : "SearchProvider"}
      screenOptions={options}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Home" component={Home} />
      
      <Tab.Screen name="StartLogin" component={StartLogin} />
      <Tab.Screen name="SearchProvider" component={SearchProvider} />

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
      <Tab.Screen name="SplashScreen" component={SplashScreen} />
      <Tab.Screen name="LocationBottomSheet" component={LocationBottomSheet} />
      <Tab.Screen name="RateSupplierBSheet" component={RateSupplierBSheet} />
      <Tab.Screen name="Accepted" component={Accepted} />
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="Onboarding1" component={IntroScreen01} />
      <Tab.Screen name="Onboarding2" component={IntroScreen02} />
      <Tab.Screen name="Onboarding3" component={LogInScreen} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Application" component={Application} />
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="ResetCode" component={ResetCode} />
      <Tab.Screen name="NewPassword" component={NewPassword} />
      <Tab.Screen name="CancelScreen" component={CancelScreen} />
      <Tab.Screen name="Security" component={Security} />
      <Tab.Screen
        name="ProfileNotifications"
        component={ProfileNotifications}
      />
      <Tab.Screen name="Languages" component={Languages} />
      <Tab.Screen name="Credit" component={Credit} />
      <Tab.Screen name="AddCredit" component={AddCredit} />
      <Tab.Screen name="EditProfile" component={EditProfile} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SeeAll" component={SeeAll} />
      <Tab.Screen name="CompleteDetails" component={CompleteDetails} />
      <Tab.Screen name="TrackerMain" component={TrackerMain} />
      <Tab.Screen name="Faq" component={Faq} />
      <Tab.Screen name="ViewAll" component={ViewAll} />
      <Tab.Screen name="SupplierProfile" component={SupplierProfile} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Map" component={Map} />


    </Tab.Navigator>
  );
};

export default Tabs;
