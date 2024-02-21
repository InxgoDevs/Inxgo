import React from "react";
import { View, Text, Image } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/icons/shield.png";
import lock from "../../assets/icons/lock.png";
import tick_blue from "../../assets/icons/tick_blue.png";
import info from "../../assets/icons/info.png";

const General = ({ navigation }) => {
  const detailJob = async (path) => {
    navigation.navigate(path);
  };

  console.log("General");

  return (
    <View
      style={{
        marginTop: "10%",
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <View>
        <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
          <View
            style={[wallet.short_image_outer, { backgroundColor: "#FFF5E1" }]}
          >
            <Image style={wallet.short_image} source={image_upload} />
          </View>
          <View style={wallet.LeftContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text numberOfLines={1} style={{ fontSize: 16, width: "110%" }}>
                Security Updates!
              </Text>
            </View>
            <Text style={{ fontSize: 11 }}>26 May, 2023 | 16:39 PM</Text>
          </View>
          <View style={wallet.RightContainer}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <View
                style={{
                  right: 10,
                  width: 30,
                  height: 20,
                  backgroundColor: "#FFC44D",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10, color: "#FFF" }}>new</Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            width: "100%",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          Now InxGo has a Two-Factor Authentication. Try it now to make your
          account more secure.
        </Text>
      </View>

      {/* Repeat similar views for other sections */}
    </View>
  );
};

export default General;
