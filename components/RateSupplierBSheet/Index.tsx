import React, { useState, useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import StarRating from "react-native-star-rating-widget";
import CustomButton from "../CustomButton";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
} from "react-native-responsive-dimensions";

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import SupplierCard from "../SupplierCard";

const App = () => {
  const [rating, setRating] = useState(4.5);

  // ref
  const [Bottomtab, setBottomTab] = useState(0);

  const snapPoints = useMemo(() => ["10%", "40%"], []);
  // const bottomSheetRef = useRef < BottomSheet > null;
  const [text, setText] = useState("");
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheet index={1} snapPoints={snapPoints}>
          <View style={styles.title}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Rate Supplier</Text>
            <SupplierCard
              SupplierName="Shibbal Farooq"
              Skill="React Native dev"
            />
          </View>
          <View style={styles.description}>
            <Text style={{ fontSize: 23, textAlign: "center", marginTop: 20 }}>
              How is your Supplier?
            </Text>
          </View>
          <View style={{ marginTop: 26, alignItems: "center" }}>
            <StarRating rating={rating} onChange={setRating} starSize={30} />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            <CustomButton title="Cancel" color="#FFF5E1" />
            <View style={{ width: 10 }}></View>
            <CustomButton title="Submit" color="#FFC44D" />
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "grey",
    // alignContent: "center",
  },
  title: {
    alignItems: "center",
  },
  description: {},
});

export default App;
