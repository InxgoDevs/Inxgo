import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Artwork03 from "../../components/artworks/Artwork03";
import { LOG_IN_SCREEN } from "../../utils/constants";
import PrimaryButton from "../../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const LogInScreen = ({ navigation }) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        {/* It Works! */}
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding2")}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Artwork03 width={240} height={240} />
        </Animated.View>

        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.description}
          </Animated.Text>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Log In"
                onPress={() => navigation.navigate("StartLogin")}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

// Thanks for watching 😃
