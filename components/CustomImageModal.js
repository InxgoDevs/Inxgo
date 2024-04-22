import React from "react";
import { Modal, StyleSheet, View, Dimensions, Text } from "react-native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import CustomModelBtn from "./CustomModelBtn";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const CustomImageModal = ({
  title,
  subtitle,
  modalVisible,
  setModalVisible,
  animationlogo,

  onPressButton,
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
            styles.modelBackground,
            { width: windowWidth, height: windowHeight },
          ]}
        >
          <View style={[styles.modalView, { width: windowWidth * 0.7 }]}>
            <AnimatedLottieView
              source={animationlogo}
              autoPlay
              loop={false}
              style={{
                width: "100%",
                height: 150,
                // bottom: 30,
                //s position: "relative",
              }}
            />
            <View style={{ gap: 15 }}>
              <Text style={styles.modalText}>{title}</Text>
              <Text style={styles.modalTextSub}>{subtitle}</Text>
              <CustomModelBtn
                buttontitle="Okay"
                color="#FFC44D"
                width={windowWidth * 0.5}
                height={40}
                onPress={onPressButton}
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
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modelBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    opacity: 0.99,
  },
  modalView: {
    backgroundColor: "#fafafa", // Semi-transparent black background
    borderRadius: 15,

    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 8,

    gap: 5,
  },
  modalText: {
    paddingHorizontal: 23,
    //bottom: 40,
    fontWeight: "600",
    textAlign: "center",
    fontSize: responsiveFontSize(2.9),
  },
  modalTextSub: {
    paddingHorizontal: 23,
    //bottom: 10,
    fontWeight: "400",
    textAlign: "center",
    fontSize: responsiveFontSize(1.7),
  },
});

export default CustomImageModal;