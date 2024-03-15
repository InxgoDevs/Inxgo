import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiCall from "../../Services/ApiCall";
import Toast from "react-native-toast-message";
import profile from "../../style/profile";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Progress from "../Booking/Progress";
import Complete from "../Booking/Complete";
import Pending from "../Booking/Pending";
import Footer from "../Footer/Index";
import { NavigationContainer } from "@react-navigation/native";

const arrow_back = require("../../assets/arrow_back.png");

const Index = ({ navigation }) => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: "first", title: "Incoming" },
      { key: "second", title: "In-Progress" },
      { key: "third", title: "Completed" },
    ],
  });

  const setIndex = (index) => {
    setState({ ...state, index });
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      labelStyle={styles.tabBarLabel}
      indicatorStyle={styles.tabBarIndicator}
      renderLabel={({ route, focused }) => (
        <TouchableOpacity
          style={[styles.tabBarButton, focused && styles.tabBarButtonFocused]}
          onPress={() => setIndex(state.routes.findIndex(r => r.key === route.key))}
        >
          <Text style={[styles.tabBarLabelText, focused && styles.tabBarLabelFocused]}>
            {capitalizeFirstLetter(route.title)}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const FirstRoute = () => (
    <View style={{ flex: 1 }}>
      <Pending navigation={navigation} />
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1 }}>
      <Progress navigation={navigation} />
    </View>
  );

  const ThirdRoute = () => (
    <View style={{ flex: 1 }}>
      <Complete navigation={navigation} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Toast />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>My Jobs</Text>
        </View>
      </TouchableOpacity>
      <TabView
        navigationState={{ index: state.index, routes: state.routes }}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          
        })}
      />
      <Footer flag={"Booking"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    elevation: 0, // Remove shadow
    borderBottomWidth: 0, // Remove border bottom
  },
  tabBarLabel: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 16,
  },
  tabBarIndicator: {
    backgroundColor: 'transparent', // Remove indicator
  },
  tabBarButton: {
    flex: 1,
    width:responsiveWidth(33) , // Adjust width as needed
    height: 40, // Adjust height as needed
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0, // Add padding to separate text from bottom border
  },
  tabBarButtonFocused: {
   // borderWidth: 0.4,
   // borderColor: '#FFC44D',
    backgroundColor:"#FFC44D", // Add border only for the focused tab
  },
  tabBarLabelText: {
    color: 'black',
  },
  tabBarLabelFocused: {
    // Additional styling for focused label if needed
  },
});

export default Index;
