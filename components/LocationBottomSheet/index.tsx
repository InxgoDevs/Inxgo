import React, { useState, useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { responsiveHeight, responsiveWidth, responsiveFontSize, useResponsiveHeight } from "react-native-responsive-dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from "react-native-size-matters";
import EditAddress from "../EditAddress";
import { Bold, Regular } from "../../constants/fonts";
import ExpertiseLevel from "../ExpertiseLevel";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import profile from "../../style/profile";

const App = () => {
 // ref
 const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 10);
  const [minimumTime, setMinimumTime] = useState(null);
 const [Bottomtab, setBottomTab] = useState(0);
 const [selectedOption, setSelectedOption] = useState(null); // Moved state up
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
 const [time, setshowtime] = useState("Select Time");
 const [date, setshowdate] = useState("Select Date");
 const snapPoints = useMemo(() => ["1%", "100%"], []);
 const bottomSheetRef = useRef<BottomSheet>(null);
 const [text, setText] = useState("");
 const handleSheetChanges = useCallback((index: number) => {
 }, []);

 const handleRadioSelect = (option) => {
    setSelectedOption(option);
 };

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = date => {
  const dt = new Date(date);

  // Check if the date is valid
  if (!isNaN(dt)) {
    // Format the date
    const formattedDate = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    setshowdate(formattedDate);

    // If the selected date is in the future (including today), set minimumTime to null
    setMinimumTime(dt >= currentDate ? null : currentDate);
  }
  hideDatePicker();

};




const showTimePicker = () => {
  setTimePickerVisibility(true);
};

const hideTimePicker = () => {
  setTimePickerVisibility(false);
};

const handleTConfirm = time => {
  const selectedTime = new Date(time);

  // Get the current date and time
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  // Get the selected date and time
  const selectedDate = new Date(date);
  const selectedDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes()).getTime();

  // Check if the selected time is in the future or not
  if (selectedDateTime >= currentTime || selectedDate > currentDate) {
    // If the selected time is in the future or the selected date is not today, format and set the show time
    const formattedTime = selectedTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
    setshowtime(formattedTime);
  }

  // Hide the time picker regardless of whether the time is valid or not
  hideTimePicker();
};


  // renders
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
       
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
          
        
         
            <View style={styles.bootomSheet}>

    <View style={{height:responsiveHeight(6)}} >
          <Text style={{fontSize:16,fontWeight:'500',marginHorizontal:10}}> Reguesting PLUMBER Service</Text>

          </View>
              <View style={styles.upperBotm}>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(44),
                    height: responsiveHeight(7),
                    borderRadius: moderateScale(30),
                    backgroundColor: Bottomtab == 0 ? "#FFC44D" : "#F5F5F5",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setBottomTab(0);
                  }}
                >
                  <Text
                    style={{
                      color: Bottomtab == 0 ? "#000000" : "#000000",
                      fontSize: responsiveFontSize(1.8),
                      fontWeight: 700,
                    }}
                  >
                    Now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(44),
                    height: responsiveHeight(7),
                    borderRadius: moderateScale(30),
                    backgroundColor: Bottomtab == 1 ? "#FFC44D" : "#F5F5F5",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setBottomTab(1);
                  }}
                >
                  <Text
                    style={{
                      color: Bottomtab == 1 ? "#000000" : "#000000",
                      fontSize: responsiveFontSize(1.6),
                      fontWeight: 600,
                    }}
                  >
                    Schedule for Later
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{height:responsiveHeight(7),justifyContent:'center'}}>
              <Text style={{fontSize:14,fontWeight:'600',marginHorizontal:10}}>Expertise Level</Text>

              </View>
             
               <ExpertiseLevel/>
              {Bottomtab == 0 ? (
                <View
                  style={{
                    zIndex: 0,
                  // backgroundColor: "red",
                    borderRadius: moderateScale(10),
                    width: responsiveWidth(90),
                    height: responsiveHeight(60),
                  }}
                >
                  <View style={{ marginTop: responsiveHeight(2) }}>
                    {/*  Input Box */}
                    <Text style={styles.inputText}>Job Description:</Text>
                    <View
                      style={{
                        paddingHorizontal: responsiveWidth(4.5),
                        marginTop: responsiveHeight(1),
                      }}
                    >
                      <TextInput
                        style={styles.input}
                        placeholder="Type something..."
                        onChangeText={setText}
                        value={text}
                        textAlignVertical="top"
                      />
                    </View>
                  </View>
                  {/* {showPopup && <Popup />} */}
                  <View style={{ marginTop: responsiveHeight(1) }}></View>
                  <ScrollView contentContainerStyle={{height:responsiveHeight(200)}}>
                    <EditAddress
                      home="Office"
                      address="Siddique Trade Center"
                    />
                    <EditAddress home="Home" address="Gulberg Center" />
                    <EditAddress home="Work" address="Tricom Center" />
                    <EditAddress home="Office" address="LAHORE" />
                   
                    <EditAddress home="Office" address="LAHORE" />
                    <EditAddress home="Office" address="LAHORE" />
                    <EditAddress home="Office" address="LAHORE" />
                    <EditAddress home="Office" address="LAHORE" />
                    <EditAddress home="Office" address="LAHORE" />

                  </ScrollView>

                  <View
                    style={{
                   //   backgroundColor: "grey",
                      
                      width: responsiveWidth(70),
                      height: responsiveHeight(3),
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../assets/add.png")}
                      />
                      <Text
                        style={{
                          color: "#FFC44D",
                          fontSize: responsiveFontSize(2),
                        }}
                      >
                        Add New Address
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View
                  
                >
                  <Text style={{fontSize:14,fontWeight:'600',marginHorizontal:10}}>Date:</Text>
                  <View style={styles.cardContainer22}>
      
      <Text>{date}</Text>
      <TouchableOpacity onPress={showDatePicker} style={{ position: 'absolute', right: 25 }}>
        <Image source={require('../../assets/DOB.png')} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={currentDate}
        maximumDate={maxDate}
      />
          
        </View>
        <Text style={{fontSize:14,fontWeight:'600',marginHorizontal:10}}>Time:</Text>
        <View style={styles.cardContainer22}>
         
            <Text>{time}</Text>

      <TouchableOpacity onPress={showTimePicker} style={{ position: 'absolute', right: 25 }}>
        <Image source={require('../../assets/DOB.png')} />
      </TouchableOpacity>
          
         
            <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTConfirm}
        onCancel={hideTimePicker}
        minimumDate={minimumTime}
        
      /> 
        </View>
                </View>
              )}
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
    //gap:50
  },
  
  bootomSheet: {
    width: responsiveWidth(100),
    height: responsiveHeight(90),
    zIndex: 0,
    // backgroundColor: "green",
    //alignItems: "center",
    borderRadius: moderateScale(35),
    //justifyContent: "center",
    paddingHorizontal: 15,

  },
  contentContainer: {
    flex: 1,
    //alignItems: "center",
  },
  upperBotm: {
    zIndex: 0,
    width: responsiveWidth(90),
    alignItems: "center",
    height: responsiveHeight(8),
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderRadius: moderateScale(30),
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",

    // marginLeft: responsiveWidth(4),
  },
  inputBox: {
    // backgroundColor: 'grey',
    margin: moderateScale(14),
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    marginLeft: moderateScale(15),
    fontSize: 17,
    fontWeight: "600",
    color: "#434343",
  },
  keyboardAvoidingContainer: {
    //flex: 1,
    zIndex: 1,
    // marginTop: responsiveHeight(2),
    // height: responsiveHeight(100),
    //backgroundColor: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    height: responsiveHeight(7),
    borderRadius: moderateScale(10),
    paddingLeft: responsiveWidth(1.5),
    width: responsiveWidth(83),
  },
  tabView: {
    flexDirection: "row",
    //backgroundColor: "red",
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: moderateScale(15),
    alignItems: "center",
  },
  cardContainer22: {
    width: responsiveWidth(90),
    height: responsiveHeight(10),
   //  backgroundColor: "orange",
    // flexDirection: 'row',
    // marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputSearch: {
    width:responsiveWidth(85),
   backgroundColor:'#F5F5F5',
   opacity:1,
   borderRadius:15,
   paddingHorizontal:10,
   height:56,
   color:'black',
     //  flex: 1, // Take up the remaining space in the container

    zIndex: 0, // Ensure border has z-index of 0
  },
});

export default App;
