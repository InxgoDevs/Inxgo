import { OnboardFlow } from "../../Onboarding/OnboardFlow";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const start1 = require("../../assets/start1.png");

const start2 = require("../../assets/start2.png");
const start3 = require("../../assets/start3.png");
const Index = () => {
  return (
    <OnboardFlow
      pages={[
        {
          title: "Work on Your Terms!",
          subtitle: "Become a Provider and Monetize Your Skills Today",
          imageUri: Image.resolveAssetSource(require("../../assets/start1.png"))
            .uri,
        },
        {
          title: "Discover a World of Convenience!",
          subtitle: "Find Reliable Service Providers Nearby.",
          imageUri: Image.resolveAssetSource(require("../../assets/start2.png"))
            .uri,
        },
        {
          imageUri: Image.resolveAssetSource(require("../../assets/start2.png"))
            .uri,

          subtitle: "Embrace Freedom and Flexibility with Our Innovative App!",
          imageUri: Image.resolveAssetSource(require("../../assets/start2.png"))
            .uri,
        },
      ]}
      type={"fullscreen"}
    />
  );
};

export default Index;

const styles = StyleSheet.create({});
