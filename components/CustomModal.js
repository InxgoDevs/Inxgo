import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./CustomButton";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import CustomModelBtn from "./CustomModelBtn";

const CustomModal = ({
  title,
  buttontitle,
  buttontitle2,
  modalVisible,
  setModalVisible,
  onPressNO,
  onPressYes,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.centeredView,
            { width: windowWidth, height: windowHeight },
          ]}
        >
          <View style={[styles.modalView, { width: windowWidth * 0.8 }]}>
            <Text style={styles.modalText}>{title}</Text>
            <View style={styles.buttonsContainer}>
              <CustomModelBtn
                buttontitle={buttontitle}
                color="#FFC44D"
                width={windowWidth * 0.3}
                height={40}
                onPress={onPressYes}
              />
              <View style={{ width: 10 }}></View>
              <CustomModelBtn
                buttontitle={buttontitle2}
                onPress={onPressNO}
                color="#FFF5E1"
                width={windowWidth * 0.3}
                height={40}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "auto",
    bottom: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    paddingHorizontal: 23,
    bottom: 10,
    fontWeight: "400",
    textAlign: "center",
    fontSize: responsiveFontSize(1.8),
  },
});

export default CustomModal;