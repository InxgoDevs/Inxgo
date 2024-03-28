import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import appStyle from "../../style/login_start";
import profile from "../../style/profile";
import homeStyle from "../../style/home";
//import SvgUri from "react-native-svg-uri";
import Toast from "react-native-toast-message";
import CountryPicker from "rn-country-dropdown-picker";
import Flag from "react-native-flags";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
import countryArray from "./countryArray";
import search from "../../assets/svg/search.svg";
import my_location from "../../assets/svg/my_location.svg";
import arrow_back from "../../assets/arrow_back.png";
import Loading from "../../assets/Loading_icon.gif";

const Country = ({ navigation }) => {
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [filteredData, setFilteredData] = useState({});
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    setFilteredData(countryArray.country_short);
    setLoading(true);
  }, []);

  const handleSetData = () => {
    setFilteredData(countryArray.country);
  };

  const handleScroll = async () => {
    if (loading) {
      setFlag(false);
      handleSetData();
      setLoading(false);
      setFlag(true);
    }
  };

  const globalSearch = () => {
    let filteredData = countryArray.country.filter((value) => {
      return value.name?.toLowerCase().includes(searchInput?.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  const handleChange = (event) => {
    setSearchInput(event.nativeEvent.text);
    globalSearch();
  };

  return (
    <ScrollView
      keyboardDismissMode={"on-drag"}
      onScroll={handleScroll}
      style={appStyle.body}
    >
      <View>
        <Toast />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={profile.welcome}>
            <Image style={profile.arrow_back} source={arrow_back} />
            <Text style={profile.welcomeText}>Your Country</Text>
          </View>
        </TouchableOpacity>
        <View style={homeStyle.cardContainer}>
          <View style={homeStyle.searchSection}>
            {/* <SvgUri
              style={{ left: 30, zIndex: 100000 }}
              source={{ uri: MyGlobleSetting.state.svgUrl + "search.svg" }}
            /> */}
            <TextInput
              underlineColor="transparent"
              theme={{
                colors: {
                  placeholder: "white",
                  text: "white",
                  primary: "white",
                  underlineColor: "transparent",
                  background: "#003489",
                },
              }}
              onChange={handleChange}
              style={{
                elevation: 3,
                width: "100%",
                flex: 1,
                height: 46,
                borderRadius: 8,
                paddingLeft: 20,
                backgroundColor: "#FAFAFA",
                color: "#424242",
              }}
              placeholder="Search"
            />
            {/* <SvgUri
              style={homeStyle.searchIcon}
              source={{ uri: MyGlobleSetting.state.svgUrl + "my_location.svg" }}
            /> */}
          </View>
        </View>
        {filteredData &&
          Object.keys(filteredData).map((val, i) => (
            <View style={appStyle.cardContainer} key={i}>
              <Flag
                style={{
                  position: "absolute",
                  width: 30,
                  height: 30,
                  left: 18,
                  zIndex: 1000000,
                  borderRadius: 50,
                }}
                code={filteredData[i]["code"]}
                size={32}
              />
              <TextInput
                secureTextEntry={true}
                underlineColor="transparent"
                theme={{
                  colors: {
                    placeholder: "white",
                    text: "white",
                    primary: "white",
                    underlineColor: "transparent",
                    background: "#003489",
                  },
                }}
                style={[profile.countrySearch, { paddingLeft: "15%" }]}
                placeholderStyle={{ paddingLeft: 50 }}
                placeholder={filteredData[i]["name"]}
              />
            </View>
          ))}
        {flag ? (
          <TouchableOpacity style={profile.appButtonContainer}>
            <Text style={appStyle.appButtonText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <Image
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "stretch",
            }}
            source={Loading}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Country;
