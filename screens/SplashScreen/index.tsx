import React, { useRef, useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native"; // Import the necessary functions from React Navigation

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled: boolean) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);
  const [animationFinished, setAnimationFinished] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  const onAnimationComplete = () => {
    navigation.navigate("Onboarding1");
    setAnimationFinished(true);
    onAnimationFinish(false); // Not cancelled since it played through
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <AnimatedLottieView
        ref={animation}
        onAnimationFinish={onAnimationComplete}
        source={require("../../assets/animations/inxgoAnimation.json")}
        autoPlay
        style={{
          width: "75%",
          height: 200,
          backgroundColor: "#FFFFFF",
        }}
        speed={0.5}
        loop={false} // Set loop to false to play only once
      />
    </View>
  );
};

export default AnimatedSplashScreen;
