//import liraries
import React, { useState,Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  const arrow_back = require("../../assets/arrow_back.png");
  import signUpStyle from "../../style/SignUp";
  import List from './List';
  import Map from './Map';

// create a component
const SearchProvider = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: "second", title: "Map" },
    { key: "third", title: "List" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={{ Color: "#FFC44D" }}
      inactiveColor={{ backgroundColor: "#FFC44D" }}
      indicatorStyle={{ backgroundColor: "#FFC44D" }}
      style={{ backgroundColor: "#FAFAFA" }}
    />
  );

  const MapRoute = () => (
    <View style={{ flex: 1 }}>
      <Map navigation={navigation} />
    </View>
  );

  const ListRoute = () => (
    <View style={{ flex: 1 }}>
      <List navigation={navigation} />
    </View>
  );

    return (
        <View style={styles.container}>
              <View
        style={{
          height: responsiveHeight(7),
          width: responsiveWidth(100),
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TrackerMain")}>
          <Image style={styles.arrow_backF} source={arrow_back} />
        </TouchableOpacity>
        <Text style={signUpStyle.welcomeF}>Searching for Provider</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          second: MapRoute,
          third: ListRoute,
        })}
      />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    arrow_backF: {
        //top: 6,
        marginHorizontal:20,
        // marginLeft:10 
     },
});

//make this component available to the app
export default SearchProvider;
