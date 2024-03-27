import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const CustomModal = ({ title }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
            <View style={styles.buttonsContainer}>
              <CustomButton
                title="Yes"
                color="#FFC44D"
                width={120}
                height={40}
              />
              <View style={{ width: 10 }}></View>
              <CustomButton
              
                title="No"
                color="#FFF5E1"
                width={120}
                height={40}
                //onPress={{()=>}}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,

    //marginTop: 22,
    top: 300,
    left: 35,
    position: "absolute",
  },
  modalView: {
    // margin: 30,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    width: 320,
    height: 170,
    paddingVertical: 40,
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
    bottom: 45,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // fontSize: 30,
  },
  modalText: {
    paddingHorizontal: 23,
    bottom: 15,
    textAlign: "center",
    fontSize: 16,

    // textAlign: "center",
  },
});