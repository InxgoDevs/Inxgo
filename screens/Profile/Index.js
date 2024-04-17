import React, { useState, useRef } from "react";
import {
 Text,
 View,
 Image,
 TouchableOpacity,
 TextInput,
 ScrollView,
 Modal,
 StyleSheet,
} from "react-native";
import Flag from "react-native-flags";
import SvgUri from "react-native-svg-uri";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import MyGlobleSetting from "../../Services/MyGlobleSetting";
import ApiCall from "../../Services/ApiCall";
import appStyle from "../../style/login_start";
import profile from "../../style/profile";
import arrow_back from "../../assets/arrow_back.png";
import image_upload from "../../assets/image_upload.png";
import Loading from "../../assets/Loading_icon.gif";
import arrowdown from "../../assets/svg/arrowdown.svg";
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneNumberInput from 'react-native-phone-number-input';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const gender = ["Male", "Female", "Other"];

const Index = ({ navigation }) => {
 const [image, setImage] = useState(null);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [flag, setFlag] = useState(false);
 const [date, setDate] = useState(new Date());
 const [show, setShow] = useState(false);
 const [modalVisible, setModalVisible] = useState(false);
 

 const [selectedGender, setSelectedGender] = useState("");
 const [phoneNumber, setPhoneNumber] = useState('');
 const handleEmail = (e) => {
    setEmail(e.nativeEvent.text);
 };

 const handlePassword = (e) => {
    setPassword(e.nativeEvent.text);
 };

 const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
 };

 const showDatePicker = () => {
    setShow(true);
 };

 const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setModalVisible(false);
 };

 const toggleModal = () => {
    setModalVisible(!modalVisible);
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setFlag(true);
    const data = {
      email,
      password,
      deviceID: "abcffdfddf",
    };
    let login_response = await ApiCall.postAPICall(
      2,
      "Account/Authenticate",
      data
    );
    if (typeof login_response.token === "undefined") {
      var message = "Something Went Wrong..!";
      if (typeof login_response.message !== "undefined") {
        message = login_response.message;
      }
      Toast.show({
        type: "error",
        position: "top",
        text2: message,
        topOffset: 80,
      });
      setFlag(false);
    } else {
      var Bearertoken = "Bearer " + login_response.token;
      AsyncStorage.setItem("Bearertoken", JSON.stringify(Bearertoken));
      var response = await ApiCall.postAPICall(1, "login", data);
      if (response.status) {
        AsyncStorage.setItem("user", JSON.stringify(response.data));
        var token = response.custom;
        AsyncStorage.setItem("token", JSON.stringify(token));
        AsyncStorage.setItem("permisions", JSON.stringify(response.permisions));
        AsyncStorage.setItem("isLogin", true);
        navigation.navigate("Home");
      } else {
        const errors = response.error;
        Toast.show({
          type: "error",
          position: "top",
          text2: errors,
          topOffset: 80,
        });
        setFlag(false);
      }
    }
 };

 const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!pickerResult.cancelled) {
      setImage(pickerResult.assets[0].uri);
    }
 };

 return (
    <ScrollView keyboardDismissMode={"on-drag" } >
      <View style={appStyle.body}>
       
          <View style={profile.welcome}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image style={profile.arrow_back} source={arrow_back} />
            </TouchableOpacity>
            <Text style={profile.welcomeText}>Fill Your Profile</Text>
          </View>
       
       <View style={{height:responsiveHeight(17)}}>

       
          <Image
            style={profile.image}
            source={image ? { uri: image } : image_upload}
          />
          <TouchableOpacity onPress={openImagePickerAsync} activeOpacity={0.5}>
          <Image style={{alignSelf:'center',left:40,bottom:30}} source={require('../../assets/Editbtn.png')}>

</Image>
          </TouchableOpacity>
          </View>
       

       
        <View style={Style.InputContainer}>
          <TextInput
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            style={profile.inputSearch}
            underlineColor="transparent"
            onChange={handleEmail}
            placeholder="Full Name"
          />
        </View>
        <View style={appStyle.cardContainer}>
          <TextInput 
            secureTextEntry={true}
            underlineColor="transparent"
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            style={profile.inputSearch}
            underlineColorAndroid="transparent"
            onChange={handlePassword}
            placeholder="LastName"
          />
        </View>
        <View style={appStyle.cardContainer}>
        <TextInput
        underlineColor="transparent"
        theme={{
          colors: {
            placeholder: "white",
            text: "white",
            primary: "white",
            underlineColor: "transparent",
            background: "#003489",
          },
        }}
        style={profile.inputSearch}
        underlineColorAndroid="transparent"
        placeholder="Date of Birth"
        value={date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      />
      <TouchableOpacity onPress={showDatePicker} style={{ position: 'absolute', right: 25 }}>
        <Image source={require('../../assets/DOB.png')} />
      </TouchableOpacity>
          
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              
            />
          )}
        </View>
        <View style={appStyle.cardContainer}>
        <TextInput
    secureTextEntry={true}
    underlineColor="transparent"
    theme={{
      colors: {
        placeholder: "white",
        text: "white",
        primary: "white",
        underlineColor: "transparent",
        background: "#003489",
      },
    }}
    style={[profile.inputSearch, { position: 'relative' }]} // Ensure the TextInput has relative positioning
    underlineColorAndroid="transparent"
    onChange={handlePassword}
    placeholder="Email"
 />
 <Image
    source={require('../../assets/Message.png')}
    style={{
      position: 'absolute',
      right:25, // Adjust the position as needed
      top: 28, // Adjust the position as needed
    }}
 />
          
        </View>
        <View >
      <PhoneNumberInput 
 defaultCountry="USA"
 defaultCode="PK"
 
        value={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => {
         
        }}
        onChangeCountry={(country) => {
        }}
       // withDarkTheme
        withShadow
        autoFocus
        containerStyle={{
          width:377,
 // Set the width to 90
      borderRadius: 15,
      overflow: 'hidden',
      marginLeft:17,
      height:56,
      opacity: 0.4,
      top:10
      
    }}
        countryPickerButtonStyle  ={{ backgroundColor: '#D9D9D9' }}
           //textInputStyle={{backgroundColor:"orange"}}
        textContainerStyle={{backgroundColor:"#D9D9D9ed"}}
          />
    </View>
        <View style={Style.cardText}>
        <TextInput
    theme={{
      colors: {
        placeholder: "white",
        text: "white",
        primary: "white",
        underlineColor: "transparent",
        background: "#003489",
      },
    }}
    style={[profile.inputSearch, { position: 'relative' }]} // Ensure the TextInput has relative positioning
    underlineColor="transparent"
    value={selectedGender} // Display the selected gender
    editable={false} // Make the input non-editable
    placeholder="Gender"
 />
 <TouchableOpacity
    onPress={toggleModal}
    style={{
      position: 'absolute',
      right: 10, // Adjust the position as needed
      top: 30, // Adjust the position as needed
    }}
 >
    <Image
      source={require('../../assets/DownArrow.png')}
      style={{
        transform: modalVisible ? [{ rotate: '180deg' }] : [],
      }}
    />
 </TouchableOpacity>
          
        </View>
    
       
        {modalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={Style.centeredView}>
              <View style={Style.modalView}>
                {gender.map((item, index) => (
                 <TouchableOpacity
                    key={index}
                    style={Style.modalButton}
                    onPress={() => handleGenderSelect(item)}
                 >
                    <Text style={Style.modalText}>{item}</Text>
                 </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        )}
        {!flag ? (
          <TouchableOpacity style={Style.appButton}>
            <Text style={appStyle.appButtonText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <Image
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "stretch",
            }}
            source={Loading}
          />
        )}
      </View>
    </ScrollView>
 );
};

export default Index;
const Style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
 },
 modalView: {
   // margin:10,
    backgroundColor: "white",
    marginTop:400,
    marginLeft:300,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal:15,
   // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
   // shadowOpacity: 0.25,
    //shadowRadius: 4,
    elevation:5,
 },
 modalButton: {
    // /backgroundColor: "#2196F3",
   // borderRadius: 20,
   // padding: 10,
   // elevation: 2,
 },
 modalText: {
    marginBottom:5,
    textAlign: "center",
    fontSize:14
 },
 cardText: {
  width: responsiveWidth(90),
  height: responsiveHeight(10),
  // backgroundColor:'orange',
  // flexDirection: 'row',
  // marginTop: 10,
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  flexDirection:'row',
  top:25
},
appButton: {
  width:"90%",
  alignSelf: 'center',
  backgroundColor: "#FFC44D",
  borderRadius: 30,
  paddingVertical: 10,
  paddingHorizontal: 12,
  marginTop:50,
  
},
InputContainer: {
  width: responsiveWidth(100),
  height: responsiveHeight(10),
  //backgroundColor: "gray",
  // flexDirection: 'row',
  // marginTop: 10,
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
},
  })