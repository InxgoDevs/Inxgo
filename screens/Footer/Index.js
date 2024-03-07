import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import appStyle from "../../style/footer";
import SvgUri from "react-native-svg-uri";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
const user = require("../../assets/icons/user.png");
import accountcircle from "../../assets/svg/accountcircle.svg";
import home from "../../assets/svg/home.svg";
import walletSvg from "../../assets/svg/wallet.svg";
import workSvg from "../../assets/svg/workSvg.svg";

const Index = ({ navigation, flag }) => {
  const footerMenu = (path) => {
    navigation.navigate(path);
  };

  return (
    <View style={appStyle.footer}>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Home")}
      >
        <View>
          {/* <SvgUri
            fill={flag == "Home" ? "#FFC44D" : "black"}
            style={appStyle.image}
            source={{ uri: MyGlobleSetting.state.svgUrl + "home.svg" }}
          /> */}
          <Text
            style={[
              appStyle.text,
              { color: flag == "Home" ? "#FFC44D" : "black" },
            ]}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Booking")}
      >
        <View>
          {/* <SvgUri
            style={appStyle.image}
            fill={flag == "Work" ? "#FFC44D" : "black"}
            source={{ uri: MyGlobleSetting.state.svgUrl + "workSvg.svg" }}
          /> */}
          <Text
            style={[
              appStyle.text,
              { color: flag == "Work" ? "#FFC44D" : "black" },
            ]}
          >
            Jobs
          </Text>
        </View>
      </TouchableOpacity>
      <View style={appStyle.footerDiv}>
        <TouchableOpacity
          style={{
            borderRadius: 70 + 70 / 2,
            width: 70,
            height: 70,
            backgroundColor: "#FFC44D",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => alert("Yaay!")}
        >
          <Image style={appStyle.imageCenter} source={user} />
        </TouchableOpacity>
        <Text style={appStyle.textCenter}>Post</Text>
      </View>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Wallet")}
      >
        <View>
          {/* <SvgUri
            style={appStyle.image}
            fill={flag == "Wallet" ? "#FFC44D" : "black"}
            source={{ uri: MyGlobleSetting.state.svgUrl + "wallet.svg" }}
          /> */}
          <Text
            style={[
              appStyle.text,
              { color: flag == "Wallet" ? "#FFC44D" : "black" },
            ]}
          >
            Wallet
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={appStyle.footerDiv}
        onPress={() => footerMenu("Menu")}
      >
        <View>
          {/* <SvgUri
            style={appStyle.image}
            fill={flag == "Profile" ? "#FFC44D" : "black"}
            source={{ uri: MyGlobleSetting.state.svgUrl + "accountcircle.svg" }}
          /> */}
          <Text
            style={[
              appStyle.text,
              { color: flag == "Profile" ? "#FFC44D" : "black" },
            ]}
          >
            Profile
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
