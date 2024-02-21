import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import profile from "../../style/profile";
import General from "../Notification/General";
import Application from "../Notification/Application";
import Footer from "../Footer/Index";
import arrow_back from "../../assets/arrow_back.png";

const Index = ({ navigation }) => {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: "second", title: "General" },
    { key: "third", title: "Application" },
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

  const GeneralRoute = () => (
    <View style={{ flex: 1 }}>
      <General navigation={navigation} />
    </View>
  );

  const ApplicationRoute = () => (
    <View style={{ flex: 1 }}>
      <Application navigation={navigation} />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={profile.welcome}>
          <Image style={profile.arrow_back} source={arrow_back} />
          <Text style={profile.welcomeText}>Notification</Text>
        </View>
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        renderScene={SceneMap({
          second: GeneralRoute,
          third: ApplicationRoute,
        })}
      />
      <Footer flag={"Work"} navigation={navigation} />
    </View>
  );
};

export default Index;
