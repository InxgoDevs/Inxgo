import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wallet from "../../style/wallet";
import image_upload from "../../assets/image_upload.png";
import rightarrow from "../../assets/rightarrow.png";

const Progress = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: "10%",
        elevation: 10,
        marginRight: "2%",
        marginLeft: "2%",
        backgroundColor: "#FFFFFF",
        // borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", width: "100%", marginTop: 20 }}>
        <Image style={wallet.image} source={image_upload} />
        <View style={wallet.LeftContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18 }}>Mark Tuan</Text>
          </View>
          <Text style={{ fontSize: 12 }}>Plumber</Text>
        </View>
        <View style={wallet.RightContainer}>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                right: 10,
                width: 60,
                height: 20,
                backgroundColor: "#FFC44D",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 14 }}>Active</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("TrackerMain")}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              <Image
                style={{
                  marginTop: 20,
                  marginBottom: 30,
                  width: 15,
                  height: 15,
                }}
                source={rightarrow}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Progress;
