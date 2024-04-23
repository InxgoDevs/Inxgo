import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import CreditCardForm, { Button, FormModel } from "rn-credit-card";
import { CommonImages } from "../../constants/Images";
import { Bold, Regular } from "../../constants/fonts";
import CustomImageModal from "../../components/CustomImageModal";
import { CommonAnimations } from "../../constants/animations";

const PaymentAdd: React.FC = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const formMethods = useForm<FormModel>({
    mode: "onBlur",
    defaultValues: {
      holderName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
  });
  const { handleSubmit, formState } = formMethods;

  function onSubmit(model: FormModel) {
    Alert.alert("Success: " + JSON.stringify(model, null, 2));
  }
  const handleConfirmPayment = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <CustomImageModal
          title="Visa card successful!"
          subtitle="You have successfully added Visa card credits"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          animationlogo={CommonAnimations.realcheck}
          onPressButton={() => setModalVisible(false)}
        />
        <View style={profile.welcome}>
          <TouchableOpacity onPress={() => navigation.navigate("AddCredit")}>
            <Image style={profile.arrow_back} source={CommonImages.arrow} />
          </TouchableOpacity>
          <Text style={profile.welcomeText}>Payment Add</Text>
        </View>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <CreditCardForm
            LottieView={LottieView}
            backgroundImage={
              <Image
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "115%",
                  borderRadius: 30,
                  top: -15,
                }}
                source={CommonImages.creditcardbg}
              />
            }
            fonts={{
              regular: Regular,
              bold: Bold,
            }}
            inputColors={{
              focused: "#FFC44D",
              errored: "#B00020",
              regular: "#B9C4CA",
            }}
            horizontalStart
            overrides={{
              labelText: {
                marginTop: 16,
              },
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <Button
            style={styles.button}
            title={"CONFIRM PAYMENT"}
            // onPress={handleSubmit(onSubmit)}
            onPress={handleConfirmPayment}
          />
        )}
      </SafeAreaView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  avoider: {
    flex: 10,
    padding: 26,
    height: 60,
  },
  button: {
    margin: 40,
    marginTop: 50,
   // bottom: 180,
    borderRadius: 30,
    backgroundColor: "#FFC44D",
  },
});

export default PaymentAdd;
// Define the profile styles object
const profile = StyleSheet.create({
  welcome: {
    fontSize: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  arrow_back: {
    marginRight: 10,
    top: 6,
  },
  welcomeText: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 20,
  },
});
