import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
 Alert,
 StyleSheet,
 KeyboardAvoidingView,
 Platform,
 SafeAreaView,
 View,
 Image,
 Text,
 TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, { Button, FormModel } from 'rn-credit-card';
import { CommonImages } from '../../constants/Images';


const PaymentAdd: React.FC = ({navigation}) => {
 const formMethods = useForm<FormModel>({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
 });
 const { handleSubmit, formState } = formMethods;

 function onSubmit(model: FormModel) {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2));
 }

 

 return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        
        <View style={profile.welcome}>
          <TouchableOpacity onPress={()=>navigation.navigate("AddCredit")}>
          <Image style={profile.arrow_back} source={CommonImages.arrow} />

          </TouchableOpacity>
          <Text style={profile.welcomeText}>Payment Add</Text>
        </View>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            LottieView={LottieView}
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
            title={'CONFIRM PAYMENT'}
            onPress={handleSubmit(onSubmit)}
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
    flex: 1,
    padding: 36,
 },
 button: {
    margin: 36,
    marginTop: 0,
 },
});

export default PaymentAdd;
// Define the profile styles object
const profile = StyleSheet.create({
  welcome: {
    fontSize:20,
      marginLeft:20,
      flexDirection: 'row',
  },
  arrow_back: {
    marginRight:10, 
  top:6   },
  welcomeText: {
    fontWeight: "500",
    fontSize:20,
    marginBottom:20,      },
});