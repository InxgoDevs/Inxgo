import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import wallet from "../style/wallet";
import StarRating from "react-native-star-rating-widget";

import supplierPic from "../assets/supplierPic.png";
const SupplierCard = ({ SupplierName, Skill }) => {
  const [rating, setRating] = useState(4.5);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        //backgroundColor: "red",
        justifyContent: "flex-start",
      }}
    >
      <Image style={wallet.image} source={supplierPic} />
      <View style={wallet.LeftContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18 }}>{SupplierName}</Text>
        </View>
        <Text style={{ fontSize: 12 }}>{Skill}</Text>
      </View>
      <View
        style={{
          width: 1.5,
          height: 12,
          backgroundColor: "black",
          position: "absolute",
          marginLeft: 180,
          marginTop: 27,
        }}
      ></View>
      <View style={{ marginTop: 26, right: 37 }}>
        <StarRating rating={rating} onChange={setRating} starSize={15} />
      </View>
      <Text style={{ marginTop: 27, right: 30, fontSize: 11 }}>{rating}</Text>
    </View>
  );
};

export default SupplierCard;

const styles = StyleSheet.create({});
