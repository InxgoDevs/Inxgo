import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiCall from "../../Services/ApiCall";
import Toast from "react-native-toast-message";
import profile from "../../style/profile";
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
      { key: "first", title: "Pending" },
      { key: "second", title: "In-progress" },
      { key: "third", title: "Complete" },
    ],
  });

  const setIndex = (index) => {
    setState({ ...state, index });
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FFFFFF" }}
      style={{ backgroundColor: "#009387" }}
    />
  );

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
      //  renderTabBar={renderTabBar}
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

export default Index;
